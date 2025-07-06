import { ThemeButtons } from "./theme-buttons/theme-buttons";
import { ThemeCheckbox } from "./theme-checkbox/theme-checkbox";
import { ThemeColors } from "./theme-colors/theme-colors";
import { ThemeIconButton } from "./theme-icon-button/theme-icon-button";
import { ThemeTextInput } from "./theme-text-input/theme-text-input";
import { ThemeText } from "./theme-text/theme-text";

export const AppDefaultTheme = {
  text: ThemeText,
  colors: ThemeColors,
  buttons: ThemeButtons,
  iconButton: ThemeIconButton,
  textInput: ThemeTextInput,
  checkbox: ThemeCheckbox,
};

export type AppTheme = typeof AppDefaultTheme;
