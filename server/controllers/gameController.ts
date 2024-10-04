import { NextFunction, Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import Category from "../models/gameModel";
import { AppError } from "../utils/appError";

export const getAllCategories = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const categories = await Category.find();
    res.status(200).json({
      status: "success",
      data: {
        categories,
      },
    });
  }
);
export const getCategory = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return next(new AppError("Oops! page not found", 404));
    }
    res.status(200).json({
      status: "success",
      data: {
        category,
      },
    });
  }
);
