import React from "react";
import {
  useColorMode,
  Tooltip,
  IconButton,
  SunIcon,
  MoonIcon,
} from "native-base";

export function ColorModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Tooltip
      label={colorMode === "dark" ? "Enable light mode" : "Enable dark mode"}
      placement="bottom right"
      openDelay={300}
      closeOnClick={false}
    >
      <IconButton
        position="absolute"
        top={12}
        right={8}
        onPress={toggleColorMode}
        icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
        _icon={{
          color: "purple.100",
          size: "md",
        }}
        accessibilityLabel="Color Mode Switch"
      />
    </Tooltip>
  );
}
