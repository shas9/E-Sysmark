import { Box, Heading, useColorMode } from "@chakra-ui/react";
import { Category } from "../../../hooks/useCategories";
import TrendyProductGrid from "./TrendyProductGrid";
import { useState } from "react";

const TrendyProduct = () => {
  const { colorMode } = useColorMode();
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );
  return (
    <Box p={10}>
      <Heading
        textAlign="center"
        mb={6}
        fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
        fontWeight="medium"
        color={colorMode === "light" ? "teal.800" : "white"}
      >
        Explore Our Products
      </Heading>
      <TrendyProductGrid selectedCategory={selectedCategory} />
    </Box>
  );
};

export default TrendyProduct;
