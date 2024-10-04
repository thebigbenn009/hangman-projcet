import express from "express";
import { getAllCategories, getCategory } from "../controllers/gameController";
export const gameRouter = express.Router();
gameRouter.route("/").get(getAllCategories);
gameRouter.route("/:id").get(getCategory);
