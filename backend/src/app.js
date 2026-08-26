import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'

const app = express()

app.use(helmet())
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

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