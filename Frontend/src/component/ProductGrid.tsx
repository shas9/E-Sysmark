import { SimpleGrid, Text, Box } from "@chakra-ui/react";
import useProducts from "../hooks/useProducts";
import ProductCard from "./ProductCard";
import ProductCardSkeleton from "./ProductCardSkeleton";
import ProductCardContainer from "./ProductCardContainer";
import { Category } from "../hooks/useCategories";

interface Props {
  selectedCategory: Category | null;
}

const ProductGrid = ({ selectedCategory }: Props) => {
  const { data, error, isLoading } = useProducts(selectedCategory);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <Box>
      {error && (
        <Text color="red.500" fontSize="xl" textAlign="center" my={4}>
          {error}
        </Text>
      )}

      {isLoading ? (
        <SimpleGrid columns={{ sm: 1, md: 3, lg: 3, xl: 5 }} spacing={4} p={4}>
          {skeletons.map((skeleton) => (
            <ProductCardContainer key={skeleton}>
              <ProductCardSkeleton />
            </ProductCardContainer>
          ))}
        </SimpleGrid>
      ) : (
        <SimpleGrid columns={{ sm: 1, md: 3, lg: 3, xl: 5 }} spacing={4} p={4}>
          {data.map((product) => (
            <ProductCardContainer key={product.id}>
              <ProductCard product={product} />
            </ProductCardContainer>
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
};

export default ProductGrid;
