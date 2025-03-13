import { sql } from "../db.js";

/*
 *    TABLE SCHEMA
 * 
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    region VARCHAR(80) NOT NULL,
    sets INT NOT NULL,
    reps INT NOT NULL,
    workout_id INT NOT NULL,
    FOREIGN KEY (workout_id) REFERENCES workouts (id)
 * 
 */
export const insertExercise = async (newExercise) => {
    
    const [exercise] = await sql`
       INSERT INTO exercises
       ${sql(newExercise, Object.keys(newExercise))}
       RETURNING *;
    `

    return exercise;
}
