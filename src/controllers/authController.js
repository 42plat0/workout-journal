import { insertUser } from "../models/authModel.js"
import {hash} from "argon2"

export const signup = async (req, res, next) => {
    try {
        const user = req.body;
        
        // Hash password
        user.password = await hash(user.password);

        const newUser = await insertUser(user);

        res.status(200).json({
            status: "success",
            data: {"user" :newUser}
        })

    } catch (error) {
        next(error);
    }
}

export const login = async (req, res, next) => {
    try {
    } catch (error) {
    }
}
