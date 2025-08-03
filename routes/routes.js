import Express from 'express'
import chatHandleData from '../controllers/chatControllers.js'

const routerChat = Express.Router()

//substituir depois para método POST
routerChat.get('/send', chatHandleData)

export default routerChat