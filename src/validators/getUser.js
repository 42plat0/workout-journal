import { param } from "express-validator";
import { fetchUserByUsername, fetchUserByEmail, fetchUserById } from "../models/userModel.js";
import AppError from "../utils/appError.js";

export default [
    param("identifier")
        .custom(async(par) => {
            // Check if :id was given or username
            const isId = +par ? true : false;

            if (isId){
                const user = await fetchUserById(+par);

                if (!user) 
                    throw new AppError("User with specified id was not found", 404);
                
                return true;
            }

            const user = await fetchUserByUsername(par);

            if (!user)
                throw new AppError("User with specified username was not found", 404);

            return true;
        })
]
