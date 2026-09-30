import express from 'express'
import {register, login, me, logout} from '../controllers/auth.controller.js'
import { authenticate } from '../middlewares/auth.middleware.js'

const authRoutes = express.Router()

authRoutes.post('/register', register)
authRoutes.post('/login', login)
authRoutes.get('/me', authenticate, me)
authRoutes.post('/logout', logout)


export default authRoutes