import { Box, useColorModeValue } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ContentContainer = ({ children }: Props) => {
  const shadowColor = useColorModeValue(
    "rgba(0, 0, 0, 0.1)",
    "rgba(255, 255, 255, 0.1)"
  );
  return (
    <Box
      boxShadow={`0px 0px 6px 2px ${shadowColor}`} // Add shadow to all sides
      borderRadius="md"
      p={4}
    >
      {children}
    </Box>
  );
};

export default ContentContainer;
