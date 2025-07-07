import type React from "react";
import type { ColorKeys } from "../../theme/theme-colors/theme-colors";

export interface SeparatorProps {
  background?: ColorKeys;
  height?: React.CSSProperties["height"];
  width?: React.CSSProperties["width"];
  margin?: string;
}
