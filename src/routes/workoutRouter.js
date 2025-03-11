import express from "express";

import {validate} from "../validators/validate.js";
import { getWorkouts } from "../controllers/workoutController.js";

export const workoutRouter = express.Router();

// Get all workouts
workoutRouter.route("/")
    .get(getWorkouts)

