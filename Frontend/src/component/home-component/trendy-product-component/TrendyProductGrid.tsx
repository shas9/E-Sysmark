import { SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";
import { Category } from "../../../hooks/useCategories";
import useProducts from "../../../hooks/useProducts";
import ContentContainer from "../../ContentContainer";
import ProductCard from "../../product-component/ProductCard";
import ProductCardContainer from "../../product-component/ProductCardContainer";
import ProductCardSkeleton from "../../product-component/ProductCardSkeleton";

interface Props {
  selectedCategory: Category | null;
}

const TrendyProductGrid = ({ selectedCategory }: Props) => {
  const { data, error, isLoading } = useProducts(selectedCategory);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

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
        </>
      )}
    </ContentContainer>
  );
};

export default TrendyProductGrid;
