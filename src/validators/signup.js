import { body } from "express-validator";
import { getUserByUsername, getUserByEmail } from "../models/authModel.js";
import AppError from "../utils/appError.js";

export default [
    body("username")
        .notEmpty()
            .withMessage("Username field cannot be empty")
        .isLength({min: 3, max: 80})
            .withMessage("Username field must be of length 3-80")
        .custom(async (username) => {
            const user = await getUserByUsername(username);
            if (user)
                throw new AppError("Username or email is not available", 400);

            return true;
        })
    ,
    body("password")
        .notEmpty()
            .withMessage("Password field cannot be empty")
        .isLength({min: 3, max: 255})
            .withMessage("Password field must be of length 3-255")
    ,
    body("email")
        .notEmpty()
            .withMessage("Username field cannot be empty")
        .isLength({min: 3, max: 80})
            .withMessage("Email field must be of length 3-80")
        .isEmail()
            .withMessage("Enter valid email address")
        .custom(async (email) => {
            const user = await getUserByEmail(email);
            if (user)
                throw new AppError("Username or email is not available", 400);

            return true;
        })
    ,
]
