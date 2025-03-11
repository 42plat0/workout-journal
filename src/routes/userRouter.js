import express from "express";

// Validators
import {validate} from "../validators/validate.js";
import gettingUser from "../validators/getUser.js";

// Controllers
import { getUsers, getUserByIdentifier, getLoggedInUser } from "../controllers/userController.js";
import { protect } from "../controllers/authController.js";

export const userRouter = express.Router();

userRouter.route("/")
    .get(getUsers);                                  // Get users

userRouter.route("/profile")
    .get(protect, getLoggedInUser)

userRouter.route("/:identifier")
    .get(gettingUser, validate, getUserByIdentifier);// Get user by Id/Username

