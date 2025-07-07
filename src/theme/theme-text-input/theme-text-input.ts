import type { ThemeTextInputType } from "./theme-text-input-types";

export const ThemeTextInput: ThemeTextInputType = {
  variants: {
    primary: {
      default: {
        background: "opacity-transparent",
        border: "surface-300",
        text: "primary",
        placeholder: "subtlest",
      },
      selected: {
        background: "opacity-transparent",
        border: "primary-200",
        text: "primary",
        placeholder: "subtlest",
      },
      focus: {
        border: "border-focus",
        outlineColor: "border-focus",
        outlineWidth: 4,
        outlineRadius: 4,
      },
      disabled: {
        background: "surface-50",
        border: "surface-300",
        text: "disabled",
        placeholder: "subtlest",
      },
    },
  },
  sizes: {
    small: {
      paddingX: 8,
      height: 32,
      textVariant: "Text-body/secondary/secondary",
      borderRadius: 4,
    },
    default: {
      paddingX: 12,
      height: 36,
      textVariant: "Text-body/primary/primary",
      borderRadius: 4,
    },
  },
};
