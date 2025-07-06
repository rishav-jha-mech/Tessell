import type { ColorKeys } from "../../theme/theme-colors/theme-colors";

export interface FlexViewProps extends React.HTMLAttributes<HTMLDivElement> {
  $gap?: number;
  $padding?: string;
  $direction?: React.CSSProperties["flexDirection"];
  $justify?: React.CSSProperties["justifyContent"];
  $align?: React.CSSProperties["alignItems"];
  $wrap?: React.CSSProperties["flexWrap"];
  $background?: ColorKeys;
}
