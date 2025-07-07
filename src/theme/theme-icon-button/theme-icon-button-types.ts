import type { ColorKeys } from "../theme-colors/theme-colors";

export type IconButtonState = {
  iconColor: ColorKeys;
};

export type IconButtonVariantStates = {
  default: IconButtonState;
  hover: IconButtonState;
  focus: IconButtonState & {
    outlineWidth: number;
    outlineColor: ColorKeys;
  };
  active: IconButtonState;
  disabled: IconButtonState;
};

export type IconButtonStyle = {
  iconSize: number;
  buttonRadius: number;
  buttonSize: number;
};

export type ThemeIconButtonType = {
  variants: {
    intense: IconButtonVariantStates;
  };
  sizes: {
    small: IconButtonStyle;
    medium: IconButtonStyle;
    regular: IconButtonStyle;
    large: IconButtonStyle;
  };
};
