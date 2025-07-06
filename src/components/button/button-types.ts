import type { AppIconKeys } from "../../assets/icons";
import type { ThemeButtonsType } from "../../theme/theme-buttons/theme-buttons-types";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  $icon: AppIconKeys;
  $type: keyof ThemeButtonsType["variants"];
  $size: keyof ThemeButtonsType["sizes"];
  $isFullWidth?: boolean;
  $iconOnly?: boolean;
  $isLoading?: boolean;
  children?: string;
}
