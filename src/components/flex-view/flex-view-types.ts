import type { ColorKeys } from "../../theme/theme-colors/theme-colors";

export interface FlexViewProps extends React.HTMLAttributes<HTMLDivElement> {
  $gap?: number;
  $flex?: React.CSSProperties["flex"];
  $height?: React.CSSProperties["height"];
  $width?: React.CSSProperties["width"];
  $paddingHorizontal?: number;
  $paddingVertical?: number;
  $direction?: React.CSSProperties["flexDirection"];
  $justify?: React.CSSProperties["justifyContent"];
  $align?: React.CSSProperties["alignItems"];
  $wrap?: React.CSSProperties["flexWrap"];
  $background?: ColorKeys;
  $borderRadius?: number;
  $borderTopWidth?: number;
}
