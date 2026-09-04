import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import authRoutes from './routes/auth.routes.js'
import cookieParser from 'cookie-parser'

const app = express()

app.use(helmet())
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser())
app.use('/api/auth', authRoutes)

app.get('/', (req, res) => {
    res.json({
        message: 'Bienvenue sur MoraLiv API'
    })
})


app.get('/api/health', (req, res) => {
    res.json({
        status: 'ok',
        message: 'MoraLiv API is running'
        })
})

export default app