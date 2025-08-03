import Express from 'express'
import chatHandleData from '../controllers/chatController.js'

const routerChat = Express.Router()

routerChat.post('/send', chatHandleData)

export default routerChat