import 'dotenv/config'
import app from './app.js'
import connectDB from './config/database.js'

const PORT = process.env.PORT || 3001

await connectDB()

app.listen(PORT, () => {
  console.log(`MoraLiv API running on port ${PORT}`)
})
