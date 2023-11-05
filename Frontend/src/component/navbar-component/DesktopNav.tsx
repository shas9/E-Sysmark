import { Box, Stack, useColorMode } from "@chakra-ui/react";
import NAV_ITEMS from "./NavItems";

const DesktopNav = () => {
  const { colorMode } = useColorMode();
  const isLightMode = colorMode === "light";
  const linkColor = isLightMode ? "gray.600" : "gray.200";
  const linkHoverColor = isLightMode ? "gray.800" : "white";
  const bgColor = isLightMode ? "white" : "gray.800";

  return (
    <Stack direction="row" spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box
          key={navItem.label}
          as="a"
          p={2}
          href={navItem.itemLink ?? "#"}
          fontSize="sm"
          fontWeight={500}
          color={linkColor}
          backgroundColor={bgColor}
          borderRadius="md" // Add corner radius to the box
          _hover={{
            textDecoration: "none",
            color: linkHoverColor,
            backgroundColor: isLightMode ? "teal.50" : "teal.500", // Change box background color on hover
            transition:
              "background-color 0.3s ease-in-out, color 0.3s ease-in-out", // Add smooth transition effects
          }}
        >
          {navItem.label}
        </Box>
      ))}
    </Stack>
  );
};

export default DesktopNav;
