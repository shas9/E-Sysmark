import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useCategories, { Category } from "../hooks/useCategories";
import { getCroppedImageUrl } from "../services/image-url";

interface Props {
  onSelectCategory: (category: Category) => void;
}

const CategoryList = ({ onSelectCategory }: Props) => {
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
            <Button
              onClick={() => onSelectCategory(category)}
              fontSize="lg"
              variant="link"
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
