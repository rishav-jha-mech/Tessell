import type { ColorKeys } from "../../tokens/colors/colors";
import type { TextVariant } from "../../tokens/text/typography";

export type TextProps = {
  children: React.ReactNode;
  $renderAs: TextVariant;
  $color?: ColorKeys;
  $displayAs?: React.CSSProperties["display"];
};
