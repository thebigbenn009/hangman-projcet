"use client";
import { saveCurrentCategory } from "@/app/features/gameSlice";
import { useAppDispatch } from "@/app/hooks";
import Link from "next/link";
import React from "react";
interface CategoryProps {
  text: string;
  id: string;
}
const Category = ({ text, id }: CategoryProps) => {
  const dispatch = useAppDispatch();
  const handleSaveCategory = () => {
    dispatch(saveCurrentCategory(id));
  };
  return (
    <Link
      onClick={handleSaveCategory}
      href={`/games/${id}`}
      className="category"
    >
      <h3 className="category-h3">{text}</h3>
    </Link>
  );
};

export default Category;
