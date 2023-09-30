import {
  HStack,
  Image,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import logo from "../assets/Sysmark-logo.png";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  const { colorMode } = useColorMode();

  // Define colors and styles for both light and dark modes
  const bgColor = useColorModeValue("gray.200", "gray.900"); // Background color
  const boxShadow = useColorModeValue("md", "none"); // Box shadow

  return (
    <HStack
      justifyContent="space-between"
      padding="10px" // Add padding here (adjust as needed)
      bg={bgColor}
      boxShadow={boxShadow}
    >
      <Image src={logo} boxSize="60px" m={2} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
