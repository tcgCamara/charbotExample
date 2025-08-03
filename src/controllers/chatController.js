import seekAutomaticResponse from "../services/chatServices.js"

const chatHandleData = async (req, res) => {
    const userMessage = req.body?.message

    if(!userMessage) {
        return res.status(400).json({error: 'Content [message] in the JSON body is fault.'})
    }

    //call service to communicate to Database
    const chatResponse = await seekAutomaticResponse(userMessage)

    return res.status(200).json(chatResponse)

}

export default chatHandleData