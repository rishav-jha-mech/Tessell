import type { ThemeCheckboxType } from "./theme-checkbox-types";

export const ThemeCheckbox: ThemeCheckboxType = {
  variants: {
    primary: {
      default: {
        background: "surface-100",
        border: "subtler",
        icon: "inverse",
      },
      hover: {
        background: "surface-300",
        border: "primary-300",
        icon: "inverse",
      },
      active: {
        background: "primary-300",
        border: "primary-300",
        icon: "inverse",
      },
      intermediate: {
        background: "surface-0",
        border: "primary-200",
        icon: "inverse",
      },
      disabled: {
        background: "surface-50",
        border: "surface-300",
        icon: "disabled",
      },
    },
  },
  sizes: {
    default: {
      size: 16,
      checkIconSize: 10,
    },
    large: {
      size: 20,
      checkIconSize: 12,
    },
  },
};
