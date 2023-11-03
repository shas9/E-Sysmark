import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import React from "react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack spacing={2}>
      {colorMode === "light" ? (
        <>
          <SunIcon boxSize={5} color="yellow.500" />
          <Text fontWeight="bold">Light</Text>
        </>
      ) : (
        <>
          <MoonIcon boxSize={5} color="gray.500" />
          <Text fontWeight="bold">Dark</Text>
        </>
      )}
      <Switch
        colorScheme={colorMode === "light" ? "gray" : "green"} // Customize color scheme based on mode
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
        size="lg"
      />
    </HStack>
  );
};

export default ColorModeSwitch;
