import type { ColorKeys } from "../../theme/theme-colors/theme-colors";

export interface HeaderTitleProps {
  title: string;
  backgroundColor?: ColorKeys;
  onDismiss?: () => void;
  trailingItem?: React.ReactNode;
}
