import { validationResult } from "express-validator";
import AppError from "../utils/appError.js";

export const validate = (req, res, next) => {
    try {
        const err = validationResult(req);
        
        if (!err.isEmpty()){
            const errors = err
                            .array()
                            .map((error) => error.msg)
                            .join("; ");

            throw new AppError(errors, 400); 
        }
        next();
    } catch (error) {
        next(error);
    }
}
