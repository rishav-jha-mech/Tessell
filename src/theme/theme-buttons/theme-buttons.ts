import type { ThemeButtonsType } from "./theme-buttons-types";

export const ThemeButtons: ThemeButtonsType = {
  variants: {
    primary: {
      default: {
        background: "primary-200",
        iconMarginRight: 8,
        color: "inverse",
        selectedColor: "inverse",
      },
      hover: {
        background: "primary-300",
        color: "inverse",
      },
      focus: {
        background: "primary-300",
        outlineColor: "border-focus",
        color: "inverse",
        outlineWidth: 4,
        outlineBorderRadius: 4,
      },
      disabled: {
        background: "surface-secondary",
        color: "disabled",
        selectedColor: "disabled",
      },
    },
    tertiary: {
      default: {
        background: "inverse",
        color: "subtler",
        iconMarginRight: 10,
        selectedColor: "primary-200",
      },
      hover: {
        background: "inverse",
        color: "primary-200",
      },
      focus: {
        outlineColor: "border-focus",
        outlineWidth: 4,
        outlineBorderRadius: 4,
      },
      disabled: {
        background: "inverse",
        color: "subtlest",
        selectedColor: "subtlest",
      },
    },
  },
  sizes: {
    small: {
      padding: "0 12px",
      height: 32,
      textRenderAs: "bodySecondary",
      radius: 4,
      minWidth: 104,
      iconStyle: {
        variant: "small",
        iconSize: 32,
      },
    },
    regular: {
      padding: "0 12px",
      height: 36,
      textRenderAs: "bodyPrimary",
      radius: 4,
      minWidth: 119,
      iconStyle: {
        variant: "regular",
        iconSize: 36,
      },
    },
    large: {
      padding: "0 12px",
      height: 40,
      textRenderAs: "bodyPrimary",
      radius: 4,
      minWidth: 119,
      iconStyle: {
        variant: "large",
        iconSize: 40,
      },
    },
  },
};
