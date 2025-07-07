import type { ColorKeys } from "../theme-colors/theme-colors";
import type { ThemeIconButtonType } from "../theme-icon-button/theme-icon-button-types";
import type { TextVariant } from "../theme-text/theme-text";

type ButtonState = {
  background: ColorKeys;
  color: ColorKeys;
  iconMarginRight?: number;
  selectedColor: ColorKeys;
};

type ButtonStates = {
  default: ButtonState;
  hover: Partial<ButtonState>;
  focus: Partial<ButtonState> & {
    outlineColor: ColorKeys;
    outlineWidth: number;
    outlineBorderRadius: number;
  };
  disabled: ButtonState;
};

type ButtonSize = {
  padding: string;
  height: number;
  textRenderAs: TextVariant;
  radius: number;
  minWidth: number;
  iconStyle: {
    variant: keyof ThemeIconButtonType["sizes"];
    iconSize: number;
  };
};

export type ThemeButtonsType = {
  variants: {
    primary: ButtonStates;
    tertiary: ButtonStates;
  };
  sizes: {
    small: ButtonSize;
    regular: ButtonSize;
    large: ButtonSize;
  };
};
