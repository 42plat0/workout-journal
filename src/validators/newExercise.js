import { body, param } from "express-validator";
import AppError from "../utils/appError.js";
import { fetchWorkout } from "../models/workoutModel.js";

export default [
    param("wId")
        .custom(async(id) => {
            const workout = await fetchWorkout(+id);

            if (!workout) 
                throw new AppError("Workout with specified id was not found", 404);
              
            return true;
        })
    ,
    body("name")
        .isString()
            .withMessage("Name of exercise must be a string")
        .isLength({min: 2, max: 99})
            .withMessage("Name of exercise must be of length 2-99")
    ,
    body("region")
        .isString()
            .withMessage("Exercise region must be a string")
        .isLength({min: 2, max: 79})
            .withMessage("Exercise region string must be of length 2-79")
    ,
    body("reps")
        .isNumeric()
            .withMessage("Reps should be a number")
    ,
    body("sets")
        .isNumeric()
            .withMessage("Sets should be a number")
    ,
]
