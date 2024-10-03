import dotenv from "dotenv";
import helmet from "helmet";
import mongoSanitize from "express-mongo-sanitize";
import express from "express";
dotenv.config({ path: "./" });
export const app = express();
if (process.env.NODE_ENV === "development") {
  dotenv.config({ path: "./config/config.dev.env" });
} else if (process.env.NODE_ENV === "production") {
  dotenv.config({ path: "./config/config.prod.env" });
}
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(mongoSanitize());
