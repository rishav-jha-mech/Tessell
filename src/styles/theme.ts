import { Colors } from "../tokens/colors/colors";
import { Typography } from "../tokens/text/typography";

export const theme = {
  typography: Typography,
  colors: Colors,
};

export type AppTheme = typeof theme;
