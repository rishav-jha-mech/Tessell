import type { IconButtonThemeType } from "./theme-icon-button-types";

export const ThemeIconButton: IconButtonThemeType = {
  variants: {
    intense: {
      default: { iconColor: "subtlest" },
      hover: { iconColor: "primary" },
      focus: { iconColor: "primary" },
      active: { iconColor: "primary" },
      disabled: { iconColor: "disabled" },
    },
    // TODO: Find colors for this subtle variant - Wasnt available on Figma Token page
    subtle: {
      default: { iconColor: "subtlest" },
      hover: { iconColor: "inverse" },
      focus: { iconColor: "primary" },
      active: { iconColor: "primary" },
      disabled: { iconColor: "disabled" },
    },
  },
  sizes: {
    small: { iconSize: 12, iconRadius: 12 },
    regular: { iconSize: 16, iconRadius: 16 },
    large: { iconSize: 20, iconRadius: 20 },
  },
};
