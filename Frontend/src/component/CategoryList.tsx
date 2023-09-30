import {
  Box,
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  useColorMode,
} from "@chakra-ui/react";
import useCategories, { Category } from "../hooks/useCategories";
import { getCroppedImageUrl } from "../services/image-url";

interface Props {
  onSelectCategory: (category: Category) => void;
  selectedCategory: Category | null;
}

const CategoryList = ({ selectedCategory, onSelectCategory }: Props) => {
  const { data, isLoading, error } = useCategories();
  const { colorMode } = useColorMode();

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
              color: colorMode === "light" ? "blue.600" : "blue.300",
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
              onClick={() => onSelectCategory(category)}
              fontSize="lg"
              variant="ghost"
              colorScheme={
                category.id === selectedCategory?.id ? "blue" : "gray"
              }
              justifyContent="start"
              w="100%"
              textTransform="capitalize"
              _focus={{ boxShadow: "none" }}
              className="category-text" // Added class name for text
            >
              {category.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default CategoryList;
