import type { ThemeCheckboxType } from "../../theme/theme-checkbox/theme-checkbox-types";

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  $variant?: keyof ThemeCheckboxType["variants"];
  $size?: keyof ThemeCheckboxType["sizes"];
  $disabled?: boolean;
  $checked?: boolean;
}
