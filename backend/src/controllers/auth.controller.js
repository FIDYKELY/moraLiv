import * as authService from '../services/auth.service.js'

export const register = async (req, res) => {
    const userData = req.body
    try {
    const newUser = await authService.register(userData) 
    const {password, ...userWithoutPassword } = newUser.toObject()

    res.status(201).json(userWithoutPassword )
    } catch (err){
        res.status(500).json({
            message: "Erreur lors de l'incription"
        })
        console.log(`Erreur lors de l'inscription`, err)
    }
}

export const login = async (req, res) => {
    const {email, password} = req.body
    try {
        const {user, token} = await authService.login(email, password)
        const {password: userPassword, ...userWithoutPassword} = user.toObject()

        res.cookie('token', token, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
        })
        res.status(200).json(userWithoutPassword, token)
    } catch (error) {
        res.status(401).json({
            message: "Email ou mot de passe incorrect"
        })
        console.log(`Erreur lors de la connexion`, error)
    }
    
}