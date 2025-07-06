import type { InputHTMLAttributes } from "react";
import type { ThemeRadioType } from "../../theme/theme-radio/theme-radio-types";

export interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  $variant?: keyof ThemeRadioType["variants"];
  $size?: keyof ThemeRadioType["sizes"];
  $checked?: boolean;
}
