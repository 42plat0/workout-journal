import postgres from "postgres"
import "dotenv/config";

export const sql = postgres({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    username: process.env.DB_UNAME,
    password: process.env.DB_PW,
})

export const testDbConnection = async () => {
    try {  
        await sql `SELECT 1;`;
        console.log("Successfully connected to a database");
    } catch (error) {
        console.error("Couldn't connect to a database", error);
        throw error();
    }
}
