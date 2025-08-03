import 'dotenv/config' 
import {Pool} from "pg"

//connect the app to postgres
const pool = new Pool({
    connectionString: process.env.DATABASE_URL
})

export default pool