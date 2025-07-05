import type { ColorKeys } from "../theme-colors/colors";
import type { IconButtonThemeType } from "../theme-icon-button/theme-icon-button-types";
import type { TextVariant } from "../theme-text/theme-text";

type ButtonState = {
  background: ColorKeys;
  color: ColorKeys;
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
  textRenderAs: TextVariant;
  iconStyle: keyof IconButtonThemeType["sizes"];
  radius: number;
  minWidth: number;
};

export type ThemeButtonsType = {
  variants: {
    primary: ButtonStates;
  };
  sizes: {
    small: ButtonSize;
    regular: ButtonSize;
    large: ButtonSize;
  };
};
