import express from "express";

// Validators
import {validate} from "../validators/validate.js";

// Controllers
import { getUsers } from "../controllers/userController.js";

export const userRouter = express.Router();

userRouter.route("/").post(validate, getUsers);

