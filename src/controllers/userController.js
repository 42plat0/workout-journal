import { fetchUsers } from "../models/userModel.js";
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
