import { heroui } from "@heroui/react";
import {
  primaryColor_Dark,
  primaryColor_Light,
  secondaryColor_Dark,
  secondaryColor_Light,
  tertiaryColor_Light,
} from "../colors";

export default heroui({
  themes: {
    light: {
      colors: {
        primary: primaryColor_Light,
        secondary: secondaryColor_Light,
        background: "#F9F9FD",

        tertiary: tertiaryColor_Light,
      } as any,
    },
    dark: {
      colors: {
        primary: primaryColor_Dark,
        secondary: secondaryColor_Dark,
        background: "#1E1E1E",

        // tertiary: tertiaryColor_Light,
      } as any,
    },
  },
});
