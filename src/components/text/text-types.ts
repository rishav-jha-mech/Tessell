import type { ColorKeys } from "../../theme/theme-colors/theme-colors";
import type { TextVariant } from "../../theme/theme-text/theme-text";

export type TextProps = {
  children: React.ReactNode;
  $renderAs: TextVariant;
  $color?: ColorKeys | 'inherit';
  $displayAs?: React.CSSProperties["display"];
  $textAlign?: React.CSSProperties["textAlign"];
  $userSelect?: React.CSSProperties["userSelect"];
  $marginHorizontal?: React.CSSProperties["margin"];
  $marginVertical?: React.CSSProperties["margin"];
};
