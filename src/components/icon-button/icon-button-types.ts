import type { AppIconKeys } from "../../assets/icons";
import type { IconButtonThemeType } from "../../theme/theme-icon-button/theme-icon-button-types";

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  $iconName: AppIconKeys;
  $variant: keyof IconButtonThemeType["variants"];
  $size: keyof IconButtonThemeType["sizes"];
  $isDisabled?: boolean;
  $ariaLabel: string;
}
