import type React from "react";
import type { TextInputProps } from "../text-input/text-input-types";

export interface Tag {
  id: string;
  label: string;
}

export interface TextInputTagRef {
  getTags: () => Tag[];
  focus: () => void;
  clear: () => void;
  removeAllTags: () => void;
}

export interface TextInputTagProps {
  name?: string;
  label?: string;
  placeholder?: string;
  maxWidth?: React.CSSProperties["maxWidth"];
  marginBottomX?: number;
  $helpText?: TextInputProps["$helpText"];
  onChange?: () => void;
}
