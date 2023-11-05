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

const MobileNavItem = ({ label, itemLink }: NavItem) => {
  const hoverStyles = {
    textDecoration: "none",
    backgroundColor: useColorModeValue("teal.50", "teal.500"),
    color: useColorModeValue("teal.500", "teal.50"),
    transition: "background-color 0.3s ease-in-out, color 0.3s ease-in-out",
  };

  return (
    <a href={itemLink ?? "#"} style={{ textDecoration: "none" }}>
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
    </a>
  );
};

export default MobileNav;
