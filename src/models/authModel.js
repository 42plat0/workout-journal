import { sql } from "../db.js";

export const insertUser = async (newUser) => {
    const [user] = await sql`
        INSERT INTO users
        ${sql(newUser, Object.keys(newUser))}
        RETURNING id, username, email, created_at, modified_at;
    `

    return user;
}
