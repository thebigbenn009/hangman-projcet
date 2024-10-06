"use client";
import Link from "next/link";
import React from "react";
interface CategoryProps {
  text: string;
  id: string;
}
const Category = ({ text, id }: CategoryProps) => {
  return (
    <Link href={`/games/${id}`} className="category">
      <h3 className="category-h3">{text}</h3>
    </Link>
  );
};

export default Category;
