import type { IconButtonThemeType } from "./theme-icon-button-types";

export const ThemeIconButton: IconButtonThemeType = {
  variants: {
    intense: {
      default: { iconColor: "subtlest" },
      hover: { iconColor: "primary" },
      focus: {
        iconColor: "primary",
        outlineWidth: 4,
        outlineColor: "border-focus",
      },
      active: {
        outlineColor: "border-focus",
      },
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
    small: { iconSize: 12, buttonRadius: 2, buttonSize: 16 },
    regular: { iconSize: 16, buttonRadius: 2, buttonSize: 24 },
    large: { iconSize: 20, buttonRadius: 2, buttonSize: 36 },
  },
};
