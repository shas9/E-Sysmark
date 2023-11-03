import React, { useState } from "react";
import { List, Spinner, Flex } from "@chakra-ui/react";
import useCategories, { Category } from "../hooks/useCategories";
import CategoryItem from "./CategoryItem";
import CategoryItemSkeleton from "./CategoryItemSkeleton"; // Import the CategoryItemSkeleton component

interface Props {
  onSelectCategory: (category: Category) => void;
  selectedCategory: Category | null;
}

const CategoryList = ({ selectedCategory, onSelectCategory }: Props) => {
  const { data, isLoading, error } = useCategories();

  // State to track the currently expanded category
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);

  const toggleCategory = (categoryId: number) => {
    if (expandedCategory === categoryId) {
      // If the clicked category is already expanded, collapse it
      setExpandedCategory(null);
    } else {
      // If a different category is clicked, expand it and collapse the previous one
      setExpandedCategory(categoryId);
    }
  };

  if (error) return null;

  return (
    <List spacing={2}>
      {isLoading
        ? // Render the skeleton component when loading
          Array.from({ length: 15 }).map((_, index) => (
            <CategoryItemSkeleton key={index} />
          ))
        : // Render the actual category items when data is available
          data.map((category) => (
            <CategoryItem
              key={category.id}
              category={category}
              selected={category.id === selectedCategory?.id}
              onSelectCategory={onSelectCategory}
              isExpanded={expandedCategory === category.id}
              toggleCategory={() => toggleCategory(category.id)}
            />
          ))}
    </List>
  );
};

export default CategoryList;
