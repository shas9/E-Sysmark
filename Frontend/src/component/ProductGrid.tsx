import { Text } from "@chakra-ui/react";
import useProducts from "../hooks/useProducts";

const ProductGrid = () => {
  const { products, error } = useProducts();

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </>
  );
};

export default ProductGrid;
