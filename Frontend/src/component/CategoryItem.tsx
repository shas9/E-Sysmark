import React, { useState } from "react";
import {
  Box,
  Button,
  Collapse,
  HStack,
  Icon,
  Image,
  ListItem,
} from "@chakra-ui/react";
import { MdExpandMore, MdExpandLess } from "react-icons/md";
import { getCroppedImageUrl } from "../services/image-url";
import { Category } from "../hooks/useCategories";

interface CategoryItemProps {
  category: Category;
  selected: boolean;
  onSelectCategory: (category: Category) => void;
  isExpanded: boolean;
  toggleCategory: () => void;
}

const CategoryItem: React.FC<CategoryItemProps> = ({
  category,
  selected,
  onSelectCategory,
  isExpanded,
  toggleCategory,
}) => {
  return (
    <ListItem
      key={category.id}
      paddingY="5px"
      _hover={{
        "& .category-text": {
          color: selected ? "blue.300" : "gray.600",
          background: selected ? "blue.800" : "gray.300",
        },
      }}
    >
      <HStack alignItems="center">
        <Image
          boxSize="32px"
          borderRadius="full"
          src={getCroppedImageUrl(category.image_background)}
          alt={category.name}
        />
        <Button
          fontWeight={selected ? "bold" : "normal"}
          onClick={() => {
            toggleCategory();
            onSelectCategory(category);
          }}
          fontSize="lg"
          variant="ghost"
          colorScheme={selected ? "blue" : "gray"}
          justifyContent="start"
          w="100%"
          textTransform="capitalize"
          _focus={{ boxShadow: "none" }}
          className="category-text"
        >
          {category.name}
          <Box
            ml="auto"
            fontSize="lg"
            cursor="pointer"
            onClick={toggleCategory}
          >
            {isExpanded ? (
              <Icon as={MdExpandLess} />
            ) : (
              <Icon as={MdExpandMore} />
            )}
          </Box>
        </Button>
      </HStack>
      {/* Render additional content when the category is expanded */}
      <Collapse in={isExpanded}>
        <Box mt={2} p={2} borderWidth="1px" borderRadius="md">
          {/* Add your expandable content here */}
          <p>This is additional content for {category.name}</p>
        </Box>
      </Collapse>
    </ListItem>
  );
};

export default CategoryItem;
