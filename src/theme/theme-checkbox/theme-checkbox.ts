import type { ThemeCheckboxType } from "./theme-checkbox-types";

export const ThemeCheckbox: ThemeCheckboxType = {
  variants: {
    primary: {
      default: {
        background: "surface-100",
        border: "subtler",
        icon: "primary-200",
      },
      hover: {
        background: "secondary-0",
        border: "primary-300",
        icon: "primary-300",
      },
      active: {
        background: "primary-200",
        border: "primary-200",
        icon: "inverse",
      },
      intermediate: {
        background: "surface-0",
        border: "primary-200",
        icon: "primary-200",
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
