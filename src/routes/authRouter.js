import express from "express";

// Validators
import {validate} from "../validators/validate.js";
import newUser from "../validators/signup.js";
import loginUser from "../validators/login.js";

// Controllers
import { signup, login } from "../controllers/authController.js";

export const authRouter = express.Router();

authRouter.route("/register").post(newUser, validate, signup);
authRouter.route("/login").post(loginUser, validate, login);

