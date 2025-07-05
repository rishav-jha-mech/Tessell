import type { ThemeButtonsType } from "../../theme/theme-buttons/theme-buttons-types";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  $type: keyof ThemeButtonsType["variants"];
  $size: keyof ThemeButtonsType["sizes"];
  $ifFullWidth?: boolean;
  $iconOnly?: boolean;
  $isLoading?: boolean;
  children: string;
}
