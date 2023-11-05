import { Box, Stack, useColorMode } from "@chakra-ui/react";
import NAV_ITEMS from "./NavItems";

const DesktopNav = () => {
  const { colorMode } = useColorMode();
  const isLightMode = colorMode === "light";
  const linkColor = isLightMode ? "gray.600" : "gray.200";
  const linkHoverColor = isLightMode ? "gray.800" : "white";

  // Define hover styles based on color mode
  const hoverStyles = {
    light: {
      color: "gray.900",
      transform: "scale(1.05)", // Increase size on hover
    },
    dark: {
      color: "blue.300",
      transform: "scale(1.05)", // Increase size on hover
    },
  };

  const hoverStyle = hoverStyles[colorMode];

  return (
    <Stack direction="row" spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box
          key={navItem.label}
          as="a"
          p={2}
          href={navItem.itemLink ?? "#"}
          fontSize="md"
          fontWeight={500}
          color={linkColor}
          borderRadius="md"
          transition="transform 0.2s, background 0.2s, color 0.2s" // Added transitions for a smoother hover effect
          _hover={hoverStyle}
        >
          {navItem.label}
        </Box>
      ))}
    </Stack>
  );
};

export default DesktopNav;
