import {sql} from "../db.js";

export const fetchWorkouts = async () => {
    const workouts = await sql`
        SELECT * FROM workouts;
    `
    return workouts;
}

export const insertWorkout = async(newWorkout) => {
    const [workout] = await sql`
        INSERT INTO workouts
        ${sql(newWorkout, Object.keys(newWorkout))} 
        RETURNING *;
    `
    return workout;
}

export const fetchWorkout = async (id) => {
    const [workout] = await sql`
        SELECT w.id,
               w.name,
               json_agg(e.*) AS exercises
        FROM workouts w
        LEFT JOIN exercises e
               ON e.workout_id = w.id
        WHERE w.id = ${id}
        GROUP BY w.id;
    `

    return workout;
}
