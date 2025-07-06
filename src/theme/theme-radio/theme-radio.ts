import type { ThemeRadioType } from "./theme-radio-types";

export const ThemeRadio: ThemeRadioType = {
  variants: {
    primary: {
      default: {
        background: "opacity-transparent",
        border: "primary-200",
        dot: "primary-200",
      },
      hover: {
        background: "opacity-transparent",
        border: "primary-300",
        dot: "primary-300",
      },
      active: {
        background: "opacity-transparent",
        border: "primary-300",
        dot: "primary-300",
      },
      disabled: {
        background: "surface-50",
        border: "surface-300",
        dot: "inverse",
      },
    },
  },
  sizes: {
    regular: {
      size: 16,
      dotSize: 8,
    },
    large: {
      size: 20,
      dotSize: 10,
    },
  },
};
