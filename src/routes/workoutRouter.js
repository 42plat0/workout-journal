import { Router } from "express";

import {validate} from "../validators/validate.js";
import gettingWorkout from "../validators/workout.js";

import { getWorkout, getWorkouts, updateWorkout, deleteWorkout } from "../controllers/workoutController.js";

export const workoutRouter = Router();

// Get all workouts
workoutRouter.route("/")
    .get(getWorkouts)
;

// Get workout by id
workoutRouter.route("/:id")
    .get(gettingWorkout, validate, getWorkout)
    .put(gettingWorkout, validate, updateWorkout)
    .delete(gettingWorkout, validate, deleteWorkout)
;
