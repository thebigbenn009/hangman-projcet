"use client";
import React, { useEffect } from "react";
import Category from "./Category";
import { useQuery } from "@tanstack/react-query";
const fetchCategories = async () => {
  const response = await fetch("http://127.0.0.1:8000/api/v1/games");
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  const data = await response.json();
  return data.data.categories;
};

const Categories = () => {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });
  if (isLoading)
    return (
      <div>
        <h1>Loading</h1>
      </div>
    );
  if (isError) {
    return (
      <div>
        Error: {error instanceof Error ? error.message : "An error occurred"}
      </div>
    );
  }
  return (
    <div className="categories">
      {data.map((category: { name: string }) => {
        return <Category key={category.name} text={category.name} />;
      })}
    </div>
  );
};

export default Categories;
