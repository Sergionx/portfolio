import { ColorScale } from "@nextui-org/react";

type customColorScale = ColorScale & {
  950?: string;
};

export const primaryColor_Light: customColorScale = {
  50: "#fef2f2",
  100: "#fde3e3",
  200: "#fdcbcb",
  300: "#faa7a7",
  400: "#f57474",
  500: "#eb4848",
  600: "#d82a2a",
  700: "#b21f1f",
  800: "#961e1e",
  900: "#7d1f1f",
  950: "#440b0b",
  DEFAULT: "#f57474",
  foreground: "#000000",
};

export const secondaryColor_Light = {
  50: "#fffaeb",
  100: "#fef1c7",
  200: "#fee389",
  300: "#fecd4b",
  400: "#fdbb2d",
  500: "#f79609",
  600: "#db6f04",
  700: "#b64c07",
  800: "#933b0d",
  900: "#79310e",
  950: "#461702",
  DEFAULT: "#fee389",
  foreground: "#000000",
};

export const tertiaryColor_Light = {
  50: "#eff5ff",
  100: "#dbe8fe",
  200: "#c0d7fd",
  300: "#94bffc",
  400: "#629cf8",
  500: "#3d77f4",
  600: "#2759e9",
  700: "#1f44d6",
  800: "#1f39ae",
  900: "#20368d",
  950: "#182253",
};

export const primaryColor_Dark: customColorScale = {
  ...primaryColor_Light,
  DEFAULT: "#eb4848",
  foreground: "#ffffff",
};

export const secondaryColor_Dark = {
  ...secondaryColor_Light,
  DEFAULT: "#fdbb2d",
  foreground: "#ffffff",
};
