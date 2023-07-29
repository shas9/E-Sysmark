import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useCategories from "../hooks/useCategories";
import { getCroppedImageUrl } from "../services/image-url";

const CategoryList = () => {
  const { data, isLoading, error } = useCategories();

  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <List>
      {data.map((category) => (
        <ListItem key={category.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(category.image_background)}
            ></Image>
            <Text fontSize="lg">{category.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default CategoryList;
