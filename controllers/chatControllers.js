import seekAutomaticResponse from "../services/chatServices.js"

const chatHandleData = async (req, res) => {
    const message = req.body

    if(!message.message) {
        return res.status(400).json({error: 'Message body fault.'})
    }

    console.log(message)
    // res.status(200).send('Mensagem recebida!')

    //call service to communicate to Database
    const chatResponse = await seekAutomaticResponse(message)

    console.log(chatResponse)

    return res.status(200).send(chatResponse)

}

export default chatHandleData