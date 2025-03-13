import { param } from "express-validator";
import AppError from "../utils/appError.js";
import { fetchWorkout } from "../models/workoutModel.js";

export default [
    param("id")
        .custom(async(id) => {
            const workout = await fetchWorkout(+id);

            if (!workout) 
                throw new AppError("Workout with specified id was not found", 404);
              
            return true;
        })
    ,
]
