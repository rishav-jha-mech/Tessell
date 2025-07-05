import type { ColorKeys } from "../../theme/theme-colors/theme-colors";
import type { TextVariant } from "../../theme/theme-text/theme-text";

export type TextProps = {
  children: React.ReactNode;
  $renderAs: TextVariant;
  $color?: ColorKeys;
  $displayAs?: React.CSSProperties["display"];
};
