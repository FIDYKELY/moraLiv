import bcrypt from 'bcrypt'
import User from '../models/User.js'
import jwt from 'jsonwebtoken'


export const register = async(userData) => {
    const existingUser = await User.findOne({email: userData.email})

    if (existingUser){
        throw new Error(`Utilisateur existant : ${userData.email}`)
    }

    const hashedPassword = await bcrypt.hash(userData.password, 10)

    const userToCreate = {
        ...userData,
        password: hashedPassword
    }

    const newUser = await User.create(userToCreate)

    return newUser
}

export const login = async (email, password) => {
    const user = await User.findOne({email: email})

    if(!user){
        throw new Error('Email ou mot de passe incorrect')
    }

    const isPasswordCorrect = await bcrypt.compare(
        password,
        user.password
    )

    if(!isPasswordCorrect){
        throw new Error('Email ou mot de passe incorrect')
    }

    const token = jwt.sign({
        userId: user.id,
        email: user.email,
        role: user.role
    },
    process.env.JWT_SECRET,
    {
        expiresIn: process.env.JWT_EXPIRES_IN
    })
   

    return {user, token}
}