import type { ThemeRadioType } from "./theme-radio-types";

export const ThemeRadio: ThemeRadioType = {
  variants: {
    primary: {
      default: {
        background: "opacity-transparent",
        border: "border-radio",
        dot: "primary-200",
      },
      hover: {
        background: "opacity-transparent",
        border: "primary-200",
        dot: "primary-200",
      },
      active: {
        background: "opacity-transparent",
        border: "primary-300",
        dot: "primary-300",
      },
      disabled: {
        background: "surface-secondary",
        border: "border-disabled",
        dot: "inverse",
      },
    },
  },
  sizes: {
    regular: {
      size: 16,
      dotSize: 6,
    },
    large: {
      size: 20,
      dotSize: 8,
    },
  },
};
