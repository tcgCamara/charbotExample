import db from "../db/dbConnection.js" 

async function seekAutomaticResponse (message) {
      
    const result = await db.query(
        `SELECT response 
        FROM chat_intentions 
        WHERE $1 ILIKE '%' || keyword || '%' 
        LIMIT 1`,
        [message]
    )

    console.log('Query defined.')
    return result.rows[0]? result.rows[0].response : {message: 'Desculpe, não consegui entendi. Você pode tentar de novo?'}

}

export default seekAutomaticResponse