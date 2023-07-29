import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./component/NavBar";
import ProductGrid from "./component/ProductGrid";
import CategoryList from "./component/CategoryList";

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, //1024
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <CategoryList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <ProductGrid />
      </GridItem>
    </Grid>
  );
};

export default App;
