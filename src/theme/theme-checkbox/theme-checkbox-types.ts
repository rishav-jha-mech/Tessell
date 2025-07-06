import type { ColorKeys } from "../theme-colors/theme-colors";

export type CheckboxState = {
  background: ColorKeys;
  border: ColorKeys;
  icon: ColorKeys;
};

export type CheckboxVariants = {
  default: CheckboxState;
  hover: CheckboxState;
  active: CheckboxState;
  intermediate: CheckboxState;
  disabled: CheckboxState;
};

export type CheckboxSizes = {
  size: number;
  checkIconSize: number;
};

export type ThemeCheckboxType = {
  variants: {
    primary: CheckboxVariants;
  };
  sizes: {
    default: CheckboxSizes;
    large: CheckboxSizes;
  };
};
