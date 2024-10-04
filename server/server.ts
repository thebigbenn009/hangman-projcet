import dotenv from "dotenv";
import { app } from "./app";
import mongoose from "mongoose";
// dotenv.config({ path: "./config/config.env" });
dotenv.config({
  path:
    process.env.NODE_ENV === "production"
      ? "./config/config.prod.env"
      : "./config/config.dev.env",
});

const port = process.env.PORT;
const db = process.env.DB as string;
const connectDB = async (): Promise<void> => {
  try {
    if (!db) {
      throw new Error("DB environment variable is not set");
    }
    await mongoose.connect(db);
    console.log("Connection to database successful");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};
connectDB();

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
