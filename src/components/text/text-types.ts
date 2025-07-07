import type { ColorKeys } from "../../theme/theme-colors/theme-colors";
import type { TextVariant } from "../../theme/theme-text/theme-text";

export type TextProps = {
  as?: React.ElementType;
  children: React.ReactNode;
  href?: string;
  $renderAs: TextVariant;
  $color?: ColorKeys | "inherit";
  $displayAs?: React.CSSProperties["display"];
  $textAlign?: React.CSSProperties["textAlign"];
  $userSelect?: React.CSSProperties["userSelect"];
  $marginHorizontal?: React.CSSProperties["margin"];
  $marginVertical?: React.CSSProperties["margin"];
  $textDecoration?: React.CSSProperties["textDecoration"];
};
