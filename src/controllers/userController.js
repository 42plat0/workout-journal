import { fetchUsers, fetchUserByUsername, fetchUserById } from "../models/userModel.js";
import { hash } from "argon2";
import { insertUser } from "../models/userModel.js";


export const getUsers = async (req, res, next) => {
    try {
        const users = await fetchUsers()

        res.status(200).json({
            status: "success",
            data: users || null
        })

    } catch (error) {
        next(error);
    }
}

export const getUserByIdentifier = async (req, res, next) => {
    try {
        let user;
        // Username or id
        const { identifier: param } = req.params;

        if (+param)
            user = await fetchUserById(+param);
        else
            user = await fetchUserByUsername(param);

        res.status(200).json({
            status: "success",
            user: user
        })

    } catch (error) {
        next(error);
    }
}

export const getLoggedInUser = async (req, res, next) => {
    try {
        // Check if logged in
        const user = req.user;

        delete (user.modified_at);
        delete (user.created_at);
        res.status(200).json({
            status: "success",
            data: user
        })

    } catch (error) {
        next(error);
    }
}

export const createUser = async (req, res, next) => {
    try {
        const user = req.body;
        delete (user.repassword);

        // Hash password
        user.password = await hash(user.password);

        const newUser = await insertUser(user);

        newUser.password = undefined;

        res.status(200).json({
            status: "success",
            data: { "user": newUser },
            message: "Vartotojas sėkmingai sukurtas!"
        })

    } catch (error) {
        next(error);
    }
}
