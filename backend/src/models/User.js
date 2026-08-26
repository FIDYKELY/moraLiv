import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        trim: true
    },
    role:{
        type: String,
        enum: ['client', 'livreur'],
        default: 'client'
    },
    isActive: {
        type: Boolean,
        default: true
    }
},{
    timestamps: true
})

const User = mongoose.model('User', userSchema)

export default User