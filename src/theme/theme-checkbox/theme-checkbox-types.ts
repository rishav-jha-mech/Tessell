import type { ColorKeys } from "../theme-colors/theme-colors";

type CheckboxStateStyleTokens = {
  backgroundColor: ColorKeys;
  borderColor: ColorKeys;
  iconColor?: ColorKeys;
};

type CheckboxInteractionStates = {
  default: CheckboxStateStyleTokens;
  hover: CheckboxStateStyleTokens;
  active: CheckboxStateStyleTokens;
  disabled: CheckboxStateStyleTokens;
};

type CheckboxVariantStates = {
  unchecked: CheckboxInteractionStates;
  active: CheckboxInteractionStates;
  intermediate: CheckboxInteractionStates;
};

type CheckboxSizeTokens = {
  size: number;
  checkIconSize: number;
};

export type ThemeCheckboxType = {
  variants: {
    primary: CheckboxVariantStates;
  };
  sizes: {
    default: CheckboxSizeTokens;
    large: CheckboxSizeTokens;
  };
};
