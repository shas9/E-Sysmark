import React, { useState } from "react";
import {
  Box,
  Button,
  Collapse,
  HStack,
  Icon,
  Image,
  List,
  ListItem,
  Spinner,
  useColorMode,
} from "@chakra-ui/react";
import useCategories, { Category } from "../hooks/useCategories";
import { getCroppedImageUrl } from "../services/image-url";
import { MdExpandMore, MdExpandLess } from "react-icons/md"; // Material UI icons

interface Props {
  onSelectCategory: (category: Category) => void;
  selectedCategory: Category | null;
}

const CategoryList = ({ selectedCategory, onSelectCategory }: Props) => {
  const { data, isLoading, error } = useCategories();
  const { colorMode } = useColorMode();

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
  if (isLoading) return <Spinner />;
  return (
    <List spacing={2}>
      {data.map((category) => (
        <ListItem
          key={category.id}
          paddingY="5px"
          _hover={{
            "& .category-text": {
              color: colorMode === "light" ? "gray.600" : "blue.300",
              background: colorMode === "light" ? "gray.300" : "blue.800",
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
              fontWeight={
                category.id === selectedCategory?.id ? "bold" : "normal"
              }
              onClick={() => {
                toggleCategory(category.id);
                onSelectCategory(category);
              }}
              fontSize="lg"
              variant="ghost"
              colorScheme={
                category.id === selectedCategory?.id ? "blue" : "gray"
              }
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
                onClick={() => toggleCategory(category.id)}
              >
                {expandedCategory === category.id ? (
                  <Icon as={MdExpandLess} />
                ) : (
                  <Icon as={MdExpandMore} />
                )}
              </Box>
            </Button>
          </HStack>
          {/* Render additional content when the category is expanded */}
          <Collapse in={expandedCategory === category.id}>
            <Box mt={2} p={2} borderWidth="1px" borderRadius="md">
              {/* Add your expandable content here */}
              <p>This is additional content for {category.name}</p>
            </Box>
          </Collapse>
        </ListItem>
      ))}
    </List>
  );
};

export default CategoryList;
