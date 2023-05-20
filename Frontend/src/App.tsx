import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./component/NavBar";
import ProductGrid from "./component/ProductGrid";

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, //1024
      }}
    >
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">Aside</GridItem>
      </Show>
      <GridItem area="main">
        <ProductGrid />
      </GridItem>
    </Grid>
  );
};

export default App;
