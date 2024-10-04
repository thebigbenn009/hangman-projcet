import dotenv from "dotenv";
import { readFileSync } from "fs";
import mongoose from "mongoose";
import path from "path";
import Category from "./models/gameModel";
dotenv.config({
  path:
    process.env.NODE_ENV === "production"
      ? "./config/config.prod.env"
      : "./config/config.dev.env",
});

console.log(process.env.NODE_ENV);
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
connectDB().then(() => {
  importData().then(() => {
    console.log("import process completed");
    process.exit(1);
  });
});

// const categories = JSON.parse(readFileSync(`${__dirname}/./data.json`, "utf8"));
const categories = JSON.parse(
  readFileSync(path.resolve(__dirname, "./utils/data.json"), "utf8")
);
console.log(categories);
const importData = async () => {
  try {
    await Category.create(categories.categories);
    console.log("Data loaded successfully");
  } catch (error) {
    console.log(error);
  } finally {
    mongoose.connection.close();
  }
};
