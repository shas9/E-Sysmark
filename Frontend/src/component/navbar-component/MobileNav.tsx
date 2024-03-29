import { Box, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import NAV_ITEMS, { NavItem } from "./NavItems";

const MobileNav = () => {
  return (
    <Stack p={4} display={{ md: "none" }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, itemLink, target }: NavItem) => {
  const hoverStyles = {
    textDecoration: "none",
    backgroundColor: useColorModeValue("gray.300", "blue.700"),
    transition: "background-color 0.3s ease-in-out, color 0.3s ease-in-out",
  };

  return (
    <Box as="a" href={itemLink ?? "#"} target={target ?? ""}>
      <Box
        py={2}
        px={3}
        justifyContent="space-between"
        alignItems="center"
        borderRadius="md"
        _hover={hoverStyles}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
      </Box>
    </Box>
  );
};

export default MobileNav;
