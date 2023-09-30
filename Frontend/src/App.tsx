import { Grid, GridItem, Show, useColorModeValue } from "@chakra-ui/react";
import NavBar from "./component/NavBar";
import ProductGrid from "./component/ProductGrid";
import CategoryList from "./component/CategoryList";
import { useState } from "react";
import { Category } from "./hooks/useCategories";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );

  // Determine the background color based on the color mode (light/dark)
  const bgColor = useColorModeValue("gray.100", "gray.800");

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, //1024
      }}
      templateColumns={{
        base: "1fr",
        lg: "300px 1fr",
      }}
      bg={bgColor} // Set the background color
      minH="100vh" // Ensure the grid takes up the full viewport height
    >
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5} paddingY={5}>
          <CategoryList
            selectedCategory={selectedCategory}
            onSelectCategory={(category) => setSelectedCategory(category)}
          />
        </GridItem>
      </Show>
      <GridItem area="main" paddingY={5}>
        <ProductGrid selectedCategory={selectedCategory} />
      </GridItem>
    </Grid>
  );
};

export default App;
