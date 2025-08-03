import "dotenv/config"
import Express from 'express'
import routerChat from './routes/routes.js'
import { configDotenv } from "dotenv"

const app = Express()
const PORT = 3003

app.use(Express.json())
app.use('/chat', routerChat)

app.listen(PORT, () => {
    console.log('Server running...')
})
