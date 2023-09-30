import { Box, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const ProductCardContainer = ({ children }: Props) => {
  const { colorMode } = useColorMode();

  // Define colors and styles for both light and dark modes
  const bgColor = useColorModeValue("white", "gray.700");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const boxShadowColor = useColorModeValue(
    "rgba(0, 0, 0, 0.1)",
    "rgba(255, 255, 255, 0.1)"
  );

  return (
    <Box
      borderRadius={10}
      overflow="hidden"
      bgColor={bgColor}
      borderColor={borderColor}
      borderWidth="1px"
      boxShadow={`0px 2px 4px ${boxShadowColor}`}
      transition="transform 0.2s"
      _hover={{ transform: "scale(1.02)" }}
    >
      {children}
    </Box>
  );
};

export default ProductCardContainer;
