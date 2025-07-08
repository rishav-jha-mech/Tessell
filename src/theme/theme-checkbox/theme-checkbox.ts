import type { ThemeCheckboxType } from "./theme-checkbox-types";

export const ThemeCheckbox: ThemeCheckboxType = {
  variants: {
    primary: {
      unchecked: {
        default: {
          backgroundColor: "opacity-transparent",
          borderColor: "border-bold",
        },
        hover: {
          backgroundColor: "secondary-0",
          borderColor: "primary-200",
        },
        active: {
          backgroundColor: "secondary-0",
          borderColor: "primary-300",
        },
        disabled: {
          backgroundColor: "surface-secondary",
          borderColor: "subtlest",
        },
      },
      intermediate: {
        default: {
          backgroundColor: "secondary-0",
          borderColor: "primary-200",
          iconColor: "primary-200",
        },
        hover: {
          backgroundColor: "secondary-0",
          borderColor: "primary-300",
          iconColor: "primary-300",
        },
        active: {
          backgroundColor: "opacity-transparent",
          borderColor: "primary-300",
          iconColor: "primary-300",
        },
        disabled: {
          iconColor: "inverse",
          backgroundColor: "surface-secondary",
          borderColor: "subtlest",
        },
      },
      active: {
        default: {
          backgroundColor: "primary-200",
          borderColor: "primary-200",
          iconColor: "inverse",
        },
        hover: {
          backgroundColor: "primary-300",
          borderColor: "primary-300",
          iconColor: "inverse",
        },
        active: {
          backgroundColor: "primary-300",
          borderColor: "primary-300",
          iconColor: "inverse",
        },
        disabled: {
          iconColor: "inverse",
          backgroundColor: "surface-secondary",
          borderColor: "subtlest",
        },
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
