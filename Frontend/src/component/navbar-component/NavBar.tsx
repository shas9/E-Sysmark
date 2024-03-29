import {
  Box,
  Flex,
  IconButton,
  Image,
  Stack,
  Collapse,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import logo from "../../assets/Sysmark-logo.png";
import ColorModeSwitch from "../ColorModeSwitch";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

export default function NavBar() {
  const { isOpen, onToggle } = useDisclosure();

  const bgColor = useColorModeValue("gray.200", "gray.700");
  const borderColor = useColorModeValue("gray.300", "gray.600");

  return (
    <Box bg={bgColor}>
      <Flex
        minH="80px"
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle="solid"
        borderColor={borderColor}
        align="center"
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant="ghost"
            aria-label="Toggle Navigation"
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Image
            src={logo}
            alt="Our Logo"
            h={10} // Adjust the height as needed
          />
          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>
        <Stack
          flex={{ base: 1, md: 0 }}
          justify="flex-end"
          direction="row"
          spacing={6}
        >
          <ColorModeSwitch />
        </Stack>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}
