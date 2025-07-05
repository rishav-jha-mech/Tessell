import type { ThemeButtonsType } from "./theme-buttons-types";

export const ThemeButtons: ThemeButtonsType = {
  variants: {
    primary: {
      default: {
        background: "primary-200",
        color: "inverse",
      },
      hover: {
        background: "primary-300",
        color: "inverse",
      },
      focus: {
        background: "primary-300",
        outlineColor: "opacity-primary",
        color: "inverse",
        outlineWidth: 4,
        outlineBorderRadius: 4,
      },
      disabled: {
        background: "surface-secondary",
        color: "disabled",
      },
    },
  },
  sizes: {
    small: {
      padding: "8px 12px",
      textRenderAs: "bodySecondary",
      iconStyle: "small",
      radius: 4,
      minWidth: 104,
    },
    regular: {
      padding: "8px 12px",
      textRenderAs: "bodyPrimary",
      iconStyle: "regular",
      radius: 4,
      minWidth: 119,
    },
    large: {
      padding: "10px 12px",
      textRenderAs: "bodyPrimary",
      iconStyle: "large",
      radius: 4,
      minWidth: 119,
    },
  },
};
