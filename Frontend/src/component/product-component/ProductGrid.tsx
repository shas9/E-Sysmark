import {
  SimpleGrid,
  Text,
  useColorModeValue,
  Button,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import useProducts from "../../hooks/useProducts";
import ProductCard from "./ProductCard";
import ProductCardSkeleton from "./ProductCardSkeleton";
import ProductCardContainer from "./ProductCardContainer";
import { Category } from "../../hooks/useCategories";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons"; // Import pagination icons
import ContentContainer from "../ContentContainer";

interface Props {
  selectedCategory: Category | null;
}

const ProductGrid = ({ selectedCategory }: Props) => {
  const { data, error, isLoading } = useProducts(selectedCategory);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  // Define pagination button colors for light and dark modes
  const paginationButtonColor = useColorModeValue("teal", "gray");

  return (
    <ContentContainer>
      {error && (
        <Text color="red.500" fontSize="xl" textAlign="center" my={4}>
          {error}
        </Text>
      )}

      {isLoading ? (
        <SimpleGrid columns={{ sm: 1, md: 3, lg: 3, xl: 5 }} spacing={4}>
          {skeletons.map((skeleton) => (
            <ProductCardContainer key={skeleton}>
              <ProductCardSkeleton />
            </ProductCardContainer>
          ))}
        </SimpleGrid>
      ) : (
        <>
          <SimpleGrid columns={{ sm: 1, md: 3, lg: 3, xl: 5 }} spacing={4}>
            {data.map((product) => (
              <ProductCardContainer key={product.id}>
                <ProductCard product={product} />
              </ProductCardContainer>
            ))}
          </SimpleGrid>
          {/* Pagination */}
          <Flex justifyContent="space-between" mt={4}>
            <Button
              leftIcon={<ChevronLeftIcon />}
              colorScheme={paginationButtonColor}
              variant="solid"
              // Add pagination logic for previous page here
            >
              Previous
            </Button>
            <Spacer />
            <Button
              rightIcon={<ChevronRightIcon />}
              colorScheme={paginationButtonColor}
              variant="solid"
              // Add pagination logic for next page here
            >
              Next
            </Button>
          </Flex>
        </>
      )}
    </ContentContainer>
  );
};

export default ProductGrid;
