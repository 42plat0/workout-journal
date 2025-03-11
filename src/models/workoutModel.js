import {sql} from "../db.js";

export const fetchWorkouts = async () => {
    const workouts = await sql`
        SELECT * FROM workouts;
    `
    return workouts;
}

export const insertWorkout = async(newWorkout) => {
    console.log(newWorkout);
    const [workout] = await sql`
        INSERT INTO workouts
        ${sql(newWorkout, Object.keys(newWorkout))} 
        RETURNING *;
    `
    return workout;
}
