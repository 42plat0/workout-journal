import { Router } from "express";

import newExercise from "../validators/newExercise.js";
import {validate} from "../validators/validate.js";

import { addWorkoutExercise } from "../controllers/exerciseController.js";

export const exerciseRouter = Router();

// Add exercise to workout
exerciseRouter.route("/:wId/exercises")
    .post(newExercise, validate, addWorkoutExercise)
