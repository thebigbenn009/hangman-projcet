import React from "react";
interface CategoryProps {
  text: string;
}
const Category = ({ text }: CategoryProps) => {
  return (
    <article className="category">
      <h3 className="category-h3">{text}</h3>
    </article>
  );
};

export default Category;
