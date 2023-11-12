import express from "express";
import cors from "cors";
import userRouter from "./routes/userRouter.js";
import globalErrorHandler from "./middleware/errorHandler.js";
import AppError from "./utils/appError.js";

const app = express();
app.use(cors());
app.use(express.json());

//ROUTES
app.use("/api/user", userRouter);

//error handler for incorrect or unhandled routes
app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

app.use(globalErrorHandler);

export default app;
