import dotenv from "dotenv";
import helmet from "helmet";
import mongoSanitize from "express-mongo-sanitize";
import express from "express";
import { gameRouter } from "./routes/gameRoutes";
import { AppError } from "./utils/appError";
import { globalError } from "./utils/globalError";
import cors from "cors";

export const app = express();
dotenv.config({
  path:
    process.env.NODE_ENV === "production"
      ? "./config/config.prod.env"
      : "./config/config.dev.env",
});

console.log(process.env.NODE_ENV);
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(mongoSanitize());
app.use("/api/v1/games", gameRouter);

app.all("*", (req, res, next) => {
  next(
    new AppError(`cannot find path: ${req.originalUrl} on the server.`, 404)
  );
});
app.use(globalError);
