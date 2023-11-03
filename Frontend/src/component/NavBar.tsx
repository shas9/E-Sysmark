import {
  Box,
  Flex,
  Image,
  Spacer,
  useColorMode,
  HStack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import logo from "../assets/Sysmark-logo.png";

const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const bgColor = {
    light: "gray.200",
    dark: "gray.900",
  }[colorMode];

  const boxShadow = {
    light: "md",
    dark: "none",
  }[colorMode];

  return (
    <Box
      as="nav"
      p={2}
      bg={bgColor}
      boxShadow={boxShadow}
      borderBottom="1px"
      borderColor={useColorModeValue("gray.300", "gray.700")}
    >
      <Flex justify="space-between" align="center">
        <HStack spacing={2} align="center">
          <Image src={logo} boxSize="60px" alt="Sysmark Logo" />
          <Text fontSize="lg" fontWeight="bold">
            Sysmark
          </Text>
        </HStack>

        <Spacer />

        <HStack spacing={4}>
          <ColorModeSwitch />
        </HStack>
      </Flex>
    </Box>
  );
};

export default NavBar;
