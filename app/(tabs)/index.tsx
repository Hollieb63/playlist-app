import { TamaguiProvider, Theme } from "tamagui";
import config from "../tamagui.config"; // or "./tamagui.config" if in the same folder
import { Button, YStack, Text } from "tamagui";
import { useState } from "react";

export default function Index() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  return (
    <TamaguiProvider config={config}>
      {" "}
      <Theme name={theme}>
        <YStack
          flex={1}
          justifyContent="center"
          alignItems="center"
          padding="$4"
          background="$background"
          space="$4"
        >
          <Text fontFamily={"$heading"} fontSize={"$3"}>
            Hello from Tamagui 🎉
          </Text>

          <Button
            onPress={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            Switch to {theme === "light" ? "Dark" : "Light"} Theme
          </Button>
        </YStack>
      </Theme>
    </TamaguiProvider>
  );
}
