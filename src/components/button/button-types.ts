import type React from "react";
import type { AppIconKeys } from "../../assets/icons";
import type { ThemeButtonsType } from "../../theme/theme-buttons/theme-buttons-types";
import type { ThemeIconButtonType } from "../../theme/theme-icon-button/theme-icon-button-types";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  $icon: AppIconKeys;
  $trailingIcon?: AppIconKeys;
  $type: keyof ThemeButtonsType["variants"];
  $size: keyof ThemeButtonsType["sizes"];
  $iconSize?: keyof ThemeIconButtonType["sizes"];
  $isFullWidth?: boolean;
  $iconOnly?: boolean;
  $isLoading?: boolean;
  $isSelected?: boolean;
  $isHorizontallyCentered?: boolean;
  $marginBottom?: number;
  children?: React.ReactNode;
}
