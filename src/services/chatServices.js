import db from "../../db/dbConnection.js" 

async function seekAutomaticResponse (message) {

    //used to when requested data in DB is not found
    const dataNotFound = 'Desculpe, não consegui entender. Você pode tentar de novo?'

    const result = await db.query(
        `SELECT response 
        FROM chat_intentions 
        WHERE $1 ILIKE '%' || keyword || '%' 
        LIMIT 1`,
        [message]
    )

    return result.rows[0]? result.rows[0].response : dataNotFound

}

export default seekAutomaticResponse