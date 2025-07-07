import type React from "react";
import type { ColorKeys } from "../../theme/theme-colors/theme-colors";

export interface SeparatorProps {
  background?: ColorKeys;
  heightX?: number; // X is the Gutter Multiplier
  widthX?: number;
  height?: React.CSSProperties["height"];
  width?: React.CSSProperties["width"];
  margin?: string;
}
