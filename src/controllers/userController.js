import { fetchUsers, fetchUserByUsername, fetchUserById } from "../models/userModel.js";
import AppError from "../utils/appError.js";

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

export const getUserByIdentifier = async (req, res, next) =>{
    try {
        let user;
        // Username or id
        const {identifier: param} = req.params;

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

