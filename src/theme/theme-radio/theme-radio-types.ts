import type { ColorKeys } from "../theme-colors/theme-colors";

interface ThemeRadioState {
  background: ColorKeys;
  border: ColorKeys;
  dot: ColorKeys;
}

interface ThemeRadioVariantStates {
  default: ThemeRadioState;
  hover: ThemeRadioState;
  active: ThemeRadioState;
  disabled: ThemeRadioState;
}

interface ThemeRadioSizes {
  size: number;
  dotSize: number;
}

export interface ThemeRadioType {
  variants: {
    primary: ThemeRadioVariantStates;
  };
  sizes: {
    regular: ThemeRadioSizes;
    large: ThemeRadioSizes;
  };
}
