import type { ColorKeys } from "../theme-colors/theme-colors";

export type IconButtonState = {
  iconColor: ColorKeys;
  outlineWidth?: number;
  outlineColor?: ColorKeys;
  transition?: string;
};

export type IconButtonVariantStates = {
  default: IconButtonState;
  hover: Partial<IconButtonState>;
  focus: Partial<IconButtonState>;
  active: Partial<IconButtonState>;
  disabled: Partial<IconButtonState>;
};

export type IconButtonStyle = {
  iconSize: number;
  iconRadius: number;
};

export type IconButtonThemeType = {
  variants: {
    intense: IconButtonVariantStates;
    subtle: IconButtonVariantStates;
  };
  sizes: {
    small: IconButtonStyle;
    regular: IconButtonStyle;
    large: IconButtonStyle;
  };
};
