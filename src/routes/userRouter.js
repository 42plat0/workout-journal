import express from "express";

// Validators
import {validate} from "../validators/validate.js";
import gettingUser from "../validators/getUser.js";

// Controllers
import { getUsers, getUserByIdentifier } from "../controllers/userController.js";

export const userRouter = express.Router();

userRouter.route("/").get(getUsers);
userRouter.route("/:identifier").get(gettingUser, validate, getUserByIdentifier);

