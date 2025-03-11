import express from "express";
import cookieParser from "cookie-parser";

import AppError from "./utils/appError.js";
import { authRouter } from "./routes/authRouter.js";
import { userRouter } from "./routes/userRouter.js";

const app = express();

// Parse body
app.use(express.json());

// Parse cookies
app.use(cookieParser());

// Middleware for routes
app.use("/api/v1", authRouter);
app.use("/api/v1/users", userRouter);

// Middleware for not found routes
app.use("*", (req, res, next) => {
    const err = new AppError(`Endpoint ${req.originalUrl} is not found`, 404);
    next(err);
})

// Middleware for centralized error handling
app.use((error, req, res, next) => {
    const errMessage = error.message || "Internal server error";
    const errStatus  = error.statusCode || 500;
    const errStatusMsg = error.statusMessage || "error";

    res.status(errStatus).json({
        status: errStatusMsg,
        message: errMessage,
        stack: error.stack
    })
})

export {app};
