import { body } from "express-validator";
import {verify} from "argon2";

import AppError from "../utils/appError.js";
import { fetchUserByUsername } from "../models/userModel.js";

export default [
    body("username")
        .notEmpty().withMessage("Username field cannot be empty", 400)
        .custom(async (username) => {
            const user = await fetchUserByUsername(username);
            if (!user)
                throw new AppError("Username or password is incorrect", 400);

            return true;
        })
    ,
    body("password")
        .notEmpty().withMessage("Password field cannot be empty", 400)
        .custom(async(password, {req}) => {
            const user = await fetchUserByUsername(req.body.username);
            if (user)
                if (!await verify(user.password, password))
                    throw new AppError("Username or password is not correct", 400);

            return true;
        })
    ,
]
