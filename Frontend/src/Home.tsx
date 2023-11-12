import { Grid, GridItem, Show, useColorModeValue } from "@chakra-ui/react";
import NavBar from "./component/navbar-component/NavBar";
import ProductGrid from "./component/product-component/ProductGrid";
import CategoryList from "./component/category-component/CategoryList";
import { useState } from "react";
import { Category } from "./hooks/useCategories";
import HomeContent from "./component/home-component/HomeContent";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );

  // Determine the background color based on the color mode (light/dark)
  const bgColor = useColorModeValue("gray.100", "gray.800");

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
      }}
      templateColumns={{
        base: "1fr",
      }}
      bg={bgColor} // Set the background color
      minH="100vh" // Ensure the grid takes up the full viewport height
    >
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>
      <GridItem area="main" padding={5}>
        <HomeContent />
      </GridItem>
    </Grid>
  );
};

export default Home;
