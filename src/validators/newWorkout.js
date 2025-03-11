import { body, param } from "express-validator";
import AppError from "../utils/appError.js";
import { fetchUserById } from "../models/userModel.js";

export default [
    param("uId")
        .custom(async(id) => {
            // Check if :id was given or username
            const user = await fetchUserById(+id);

            if (!user) 
                throw new AppError("User with specified id was not found", 404);
              
            return true;
        })
    ,
    body("name")
        .isString()
            .withMessage("Name of a workout must be a string")
        .isLength({min: 2, max: 50})
            .withMessage("Name of a workout must be of length 2-50")
    ,
]
