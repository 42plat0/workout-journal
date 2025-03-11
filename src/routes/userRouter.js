import express from "express";

// Validators
import {validate} from "../validators/validate.js";
import gettingUser from "../validators/getUser.js";
import newWorkout from "../validators/newWorkout.js"; 

// Controllers
import { protect } from "../controllers/authController.js";
import { getUsers, getUserByIdentifier, getLoggedInUser } from "../controllers/userController.js";
import { getUserWorkouts, createWorkout } from "../controllers/workoutController.js";

export const userRouter = express.Router();

// Get users
userRouter.route("/")
    .get(getUsers);

// Get logged in user by jwt
userRouter.route("/profile")
    .get(protect, getLoggedInUser)

// Get user by Id/Username
userRouter.route("/:identifier")
    .get(gettingUser, validate, getUserByIdentifier);

// User workouts
userRouter.route("/:uId/workouts")
    .get(getUserWorkouts) // Get user workouts
    .post(newWorkout, validate, createWorkout)  // Create workout for user of id

