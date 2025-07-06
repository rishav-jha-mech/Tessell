import type { AppIconKeys } from "../../assets/icons";
import type { ColorKeys } from "../../theme/theme-colors/theme-colors";

export type AlertTheme = "success" | "error" | "warning" | "info";

export interface AlertProps {
  message: string;
  theme?: AlertTheme;
  isDismissible?: boolean;
  onClose?: () => void;
}

export type AlertThemeMappingType = Record<
  AlertTheme,
  {
    icon: AppIconKeys;
    iconColor: ColorKeys;
    backgroundColor: ColorKeys;
  }
>;
