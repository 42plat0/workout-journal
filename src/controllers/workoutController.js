import { fetchUserById } from "../models/userModel.js";
import { fetchWorkouts, insertWorkout, } from "../models/workoutModel.js";

export const getWorkouts = async (req, res, next) => {
    try {
        const workouts = await fetchWorkouts();

        res.status(200).json({
            status: "success",
            data: workouts 
        })
    } catch (error) {
        next(error);
    }
}

export const getUserWorkouts = async (req, res, next) => {
    try {
    } catch (error) {
    }
}

export const createWorkout = async (req, res, next) => {
    try {
        const {uId} = req.params;
        const workout = req.body;

        // Add user id and username to workout
        const user = await fetchUserById(+uId);
        workout.user_id = user.id;
    
        const newWorkout = await insertWorkout(workout);

        res.status(200).json({
            status: "success",
            workout: newWorkout
        })

    } catch (error) {
        next(error);
    }
}
