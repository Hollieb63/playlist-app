// tamagui.config.ts
import { createTamagui } from "tamagui";
import { tokens, themes } from "@tamagui/themes";

const config = createTamagui({
  tokens,
  themes,

  fonts: {
    heading: {
      family: "Arial",
      size: {
        1: 16,
        2: 20,
        3: 28,
      },
      lineHeight: {
        1: 20,
        2: 24,
        3: 32,
      },
      weight: {
        1: "400",
        2: "700",
      },
      letterSpacing: {
        1: 0,
        2: -0.25,
      },
    }, // <-- closing brace for heading
    body: {
      family: "System",
      size: { 1: 12, 2: 14, 3: 16 },
      lineHeight: { 1: 16, 2: 20, 3: 24 },
      weight: { 1: "400", 2: "700" },
      letterSpacing: { 1: 0, 2: -0.25 },
    },
  },
});

export type AppConfig = typeof config;

declare module "tamagui" {
  interface TamaguiCustomConfig extends AppConfig {}
}
export default config;
