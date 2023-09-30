import { Product } from "../hooks/useProducts";
import { Box, Image, Text, useColorMode } from "@chakra-ui/react";
import { getCroppedImageUrl } from "../services/image-url";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const { colorMode } = useColorMode();

  // Define colors for light and dark modes
  const bgColor = { light: "white", dark: "gray.700" };
  const textColor = { light: "black", dark: "white" };
  const borderColor = { light: "gray.200", dark: "gray.600" };

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      transition="transform 0.2s"
      _hover={{ transform: "scale(1.02)" }}
      bgColor={bgColor[colorMode]}
      color={textColor[colorMode]}
      borderColor={borderColor[colorMode]}
    >
      <Image
        src={getCroppedImageUrl(product.background_image)}
        alt={product.name}
        height="200px"
        objectFit="cover"
      />
      <Box p="4">
        <Text fontSize="lg" fontWeight="semibold" mb="2">
          {product.name}
        </Text>
        <Text fontSize="md" color="gray.600">
          Price: <strong>{"product.price"}</strong>
        </Text>
      </Box>
    </Box>
  );
};

export default ProductCard;
