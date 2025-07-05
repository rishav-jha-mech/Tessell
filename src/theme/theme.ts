import { ThemeButtons } from "./theme-buttons/theme-buttons";
import { ThemeColors } from "./theme-colors/theme-colors";
import { ThemeIconButton } from "./theme-icon-button/theme-icon-button";
import { ThemeText } from "./theme-text/theme-text";

export const AppDefaultTheme = {
  text: ThemeText,
  colors: ThemeColors,
  buttons: ThemeButtons,
  iconButton: ThemeIconButton,
};

export type AppTheme = typeof AppDefaultTheme;
