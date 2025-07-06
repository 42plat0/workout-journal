import { sql } from "../db.js";
import { hash } from "argon2";

export async function createTables() {
    await sql`
            CREATE TABLE IF NOT EXISTS users(
                ID SERIAL PRIMARY KEY,
                USERNAME VARCHAR(80) NOT NULL,
                EMAIL VARCHAR(80) NOT NULL UNIQUE,
                PASSWORD VARCHAR(255) NOT NULL,
                ROLE VARCHAR(50) DEFAULT 'user',
                CREATED_AT TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                MODIFIED_AT TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `
    await sql`
            CREATE TABLE IF NOT EXISTS workouts(
                ID SERIAL PRIMARY KEY,
                NAME VARCHAR(100) NOT NULL,
                CREATED_AT TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                USER_ID INTEGER NOT NULL REFERENCES users(ID) 
                    ON DELETE CASCADE 
                    ON UPDATE CASCADE
            )
        `

    await sql`
            CREATE TABLE IF NOT EXISTS exercises(
                ID SERIAL PRIMARY KEY,
                NAME VARCHAR(100) NOT NULL,
                REGION VARCHAR(100),
                SETS INTEGER CHECK (SETS > 0),
                REPS INTEGER CHECK (REPS > 0),
                WORKOUT_ID INTEGER REFERENCES workouts(ID) 
                    ON DELETE CASCADE 
                    ON UPDATE CASCADE
            )
        `

    
    await sql`
            INSERT INTO users (USERNAME, EMAIL, PASSWORD, ROLE)
            VALUES
                ('admin', 'admin@admin.com', ${await hash('admin123')}, 'admin'),
                ('user', 'user@user.com', ${await hash('user123')}, 'user')
            ON CONFLICT (EMAIL) DO NOTHING;
        `
    


}
