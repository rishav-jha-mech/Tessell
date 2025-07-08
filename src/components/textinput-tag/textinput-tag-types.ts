import type React from "react";

export interface Tag {
  id: string;
  label: string;
}

export interface TextInputTagProps {
  name?: string;
  label?: string;
  placeholder?: string;
  maxWidth?: React.CSSProperties["maxWidth"];
  marginBottomX?: number;
}
