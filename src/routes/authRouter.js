import express from "express";
import { signup, login } from "../controllers/authController.js";

export const authRouter = express.Router();

authRouter.route("/register").post(signup);
authRouter.route("/login").post(login);

