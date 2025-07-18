import { body } from "express-validator";
import { fetchUserByUsername, fetchUserByEmail } from "../models/userModel.js";
import AppError from "../utils/appError.js";

export default [
    body("username")
        .notEmpty()
            .withMessage("Username field cannot be empty")
        .isLength({min: 3, max: 80})
            .withMessage("Username field must be of length 3-80")
        .custom(async (username) => {
            const user = await fetchUserByUsername(username);
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
    body("repassword")
        .notEmpty()
            .withMessage("Confirm password cannot be empty")
        .custom((repass, {req}) => {
            if (repass !== req.body.password)
                throw new AppError('Slaptažodžiai privalo sutapti');
            return true;
        })
        
    ,
    body("email")
        .notEmpty()
            .withMessage("Username field cannot be empty")
        .isLength({min: 3, max: 80})
            .withMessage("Email field must be of length 3-80")
        .isEmail()
            .withMessage("Enter valid email address")
        .custom(async (email) => {
            const user = await fetchUserByEmail(email);
            if (user)
                throw new AppError("Username or email is not available", 400);

            return true;
        })
    ,
]
