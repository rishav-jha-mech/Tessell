import type { ColorKeys } from "../theme-colors/theme-colors";
import type { TextVariant } from "../theme-text/theme-text";

export type TextInputVariantState = {
  background: ColorKeys;
  border: ColorKeys;
  text: ColorKeys;
  placeholder: ColorKeys;
};

export type TextInputStates = {
  default: TextInputVariantState;
  selected: TextInputVariantState;
  focus: Partial<TextInputVariantState> & {
    outlineColor: ColorKeys;
    outlineWidth: number;
    outlineRadius: number;
  };
  disabled: TextInputVariantState;
};

export type TextInputSize = {
  paddingX: number;
  paddingY: number;
  textVariant: TextVariant;
  borderRadius: number;
};

export type ThemeTextInputType = {
  variants: {
    primary: TextInputStates;
  };
  sizes: {
    small: TextInputSize;
    default: TextInputSize;
  };
};
