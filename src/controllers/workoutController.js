import { fetchUserById } from "../models/userModel.js";
import { fetchUserWorkouts, fetchWorkout, fetchWorkouts, insertWorkout, updWorkoutDb, } from "../models/workoutModel.js";
import AppError from "../utils/appError.js";

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
        const {uId} = req.params;

        const workouts = await fetchUserWorkouts(uId); 
        
        res.status(200).json({
            status: "success",
            workouts: workouts
        })
    } catch (error) {
        next(error);
    }
}

export const getWorkout = async (req, res, next) => {
    try {
        const {id} = req.params;

        const workout = await fetchWorkout(id);

        res.status(200).json({
            status: "success",
            workout: workout
        })
    } catch (error) {
        next(error);
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

export const updateWorkout = async (req, res, next) => {
    try {
        const { id } = req.params;

        // Only name as such:
        // {"name" : "updated workout"}
        const workout = req.body;

        const updatedWorkout = await updWorkoutDb(id, workout);

        if (!updatedWorkout.length)
            throw new AppError("Workout was not updated", 500);
        // Return how many records were changed
        
        res.status(200).json({
            updated_count: updatedWorkout.length
        })

    } catch (error) {
        next(error);
    }
}
