import type { ThemeRadioType } from "./theme-radio-types";

export const ThemeRadio: ThemeRadioType = {
  variants: {
    primary: {
      unselected: {
        default: {
          backgroundColor: "surface-0",
          borderColor: "border-bold",
        },
        hover: {
          backgroundColor: "secondary-0",
          borderColor: "primary-200",
        },
        active: {
          backgroundColor: "surface-0",
          borderColor: "primary-200",
        },
        disabled: {
          backgroundColor: "surface-secondary",
          borderColor: "subtlest",
        },
      },
      selected: {
        default: {
          backgroundColor: "surface-0",
          borderColor: "primary-200",
          dotColor: "primary-200",
        },
        hover: {
          backgroundColor: "surface-0",
          borderColor: "primary-300",
          dotColor: "primary-300",
        },
        active: {
          backgroundColor: "surface-0",
          borderColor: "primary-200",
        },
        disabled: {
          backgroundColor: "surface-secondary",
          borderColor: "subtlest",
          dotColor: "inverse",
        },
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
