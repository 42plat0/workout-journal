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

export const fetchUserWorkouts = async (uId) => {
    const workouts = await sql`
        SELECT w.id AS workout_id,
               w.name AS workout_name,
               w.user_id,
               (SELECT username FROM users WHERE id = ${uId}),
               JSON_AGG(e.*) AS exercises
        FROM workouts w
        LEFT JOIN exercises e
               ON w.id = e.workout_id
        WHERE user_id = ${uId}
        GROUP BY w.id;
    `

    return workouts;
}

export const updWorkoutDb = async (wId, workout) => {
    // Return list
    const workouts = await sql`
        UPDATE workouts
        SET ${sql(workout, 'name')}
        WHERE id = ${wId}
        RETURNING id;
    `

    return workouts;
}

export const delWorkoutDb = async (wId) => {
    const [workout] = await sql`
        DELETE FROM workouts 
        WHERE id = ${wId}
        RETURNING *;
    `
    return workout;
}
