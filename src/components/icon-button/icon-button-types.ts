import type { AppIconKeys } from "../../assets/icons";
import type { ColorKeys } from "../../theme/theme-colors/theme-colors";
import type { ThemeIconButtonType } from "../../theme/theme-icon-button/theme-icon-button-types";

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  $iconName: AppIconKeys;
  $iconColor?: ColorKeys; // Overrides the default icon color
  $margin?: number;
  $borderless?: boolean;
  $variant: keyof ThemeIconButtonType["variants"];
  $size: keyof ThemeIconButtonType["sizes"];
  $rounded?: boolean;
  $ariaLabel: string;
}
