import React from "react";
import useCategories from "../hooks/useCategories";

const CategoryList = () => {
  const { categories } = useCategories();
  return (
    <ul>
      {categories.map((category) => (
        <li key={category.id}>{category.name}</li>
      ))}
    </ul>
  );
};

export default CategoryList;
