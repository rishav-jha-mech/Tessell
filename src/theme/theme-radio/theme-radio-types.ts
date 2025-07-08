import type { ColorKeys } from "../theme-colors/theme-colors";

export interface RadioStateTokens {
  backgroundColor: ColorKeys;
  borderColor: ColorKeys;
  dotColor?: ColorKeys;
}

export interface RadioInteractionStates {
  default: RadioStateTokens;
  hover: RadioStateTokens;
  active: RadioStateTokens;
  disabled: RadioStateTokens;
}

export interface RadioVariantStates {
  selected: RadioInteractionStates;
  unselected: RadioInteractionStates;
}

export interface RadioSizeTokens {
  size: number;
  dotSize: number;
}

export interface ThemeRadioType {
  variants: {
    primary: RadioVariantStates;
  };
  sizes: {
    regular: RadioSizeTokens;
    large: RadioSizeTokens;
  };
}
