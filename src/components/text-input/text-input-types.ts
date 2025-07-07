import type React from "react";
import type { ColorKeys } from "../../theme/theme-colors/theme-colors";
import type { ThemeTextInputType } from "../../theme/theme-text-input/theme-text-input-types";

export interface TextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  $variant?: keyof ThemeTextInputType["variants"];
  $size?: keyof ThemeTextInputType["sizes"];
  $isSelected?: boolean;
  $label?: string;
  $helpText?: {
    message: string;
    color: ColorKeys;
  };
  $leadingItem?: React.ReactNode;
  $trailingItem?: React.ReactNode;
  $isDisabled?: boolean;
  $marginBottomX?: number;
  $cursor?: React.CSSProperties["cursor"];
  $maxWidth?: React.CSSProperties["maxWidth"];
  $multiline?: boolean;
}
