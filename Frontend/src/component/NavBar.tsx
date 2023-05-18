import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/Sysmark-logo.png";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" m={2} />
      <Text>E-Sysmark</Text>
    </HStack>
  );
};

export default NavBar;
