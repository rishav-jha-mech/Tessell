import type { ThemeIconButtonType } from "./theme-icon-button-types";

export const ThemeIconButton: ThemeIconButtonType = {
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
        iconColor: "primary",
      },
      disabled: { iconColor: "disabled" },
    },
  },
  sizes: {
    small: { iconSize: 12, buttonRadius: 2, buttonSize: 16 },
    medium: { iconSize: 14, buttonRadius: 2, buttonSize: 16 },
    regular: { iconSize: 16, buttonRadius: 2, buttonSize: 24 },
    large: { iconSize: 20, buttonRadius: 2, buttonSize: 36 },
  },
};
