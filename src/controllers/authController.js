import {hash} from "argon2";

import AppError from "../utils/appError.js";
import { insertUser, fetchUserByUsername, fetchUserById } from "../models/userModel.js";
import { signToken, setTokenCookie, clearCookie, verifyToken } from "../utils/cookies.js";

export const signup = async (req, res, next) => {
    try {
        const user = req.body;
        
        // Hash password
        user.password = await hash(user.password);

        const newUser = await insertUser(user);

        newUser.password = undefined;
        
        // Update cookies by clearing
        if (req.cookies.jwt)
            clearCookie("jwt", res);

        // Set cookie on registration
        const {id} = newUser;
        const token = signToken(id);
        setTokenCookie(token, res);

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
        const user = req.body;

        const foundUser = await fetchUserByUsername(user.username);

        foundUser.password = undefined;

        // Update cookies by clearing
        if (req.cookies.jwt)
            clearCookie("jwt", res);
        
        // Set cookie on login
        const {id} = foundUser;
        const token = signToken(id);
        setTokenCookie(token, res);

        res.status(200).json({
            status: "Success! You logged in",
            data: {"user" : foundUser}
        })
    } catch (error) {
        next(error);
    }
}

export const logout = async (req, res, next) =>
    clearCookie("jwt", res).status(200).json({
        message: "Logged out"
    });

// Protect path
export const protect = async (req,res,next) => {
    try {
        const token = req.cookies?.jwt;

        if (!token)
            throw new AppError("You are not logged in. Please log in to get access.", 401);
        
        // Decode token and verify that there is user of id
        const decoded = verifyToken(token);
        const user = await fetchUserById(decoded.id);

        if (!user)
            throw new AppError("User of id not found", 400);

        user.password = undefined;
        // Attach user to request
        req.user = user;

        next();

    } catch (error) {
        next(error);
    }
}
