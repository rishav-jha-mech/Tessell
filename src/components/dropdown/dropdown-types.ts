import type { TextInputProps } from "../text-input/text-input-types";

export interface DropdownItemProps {
  label: string;
  value: string | number;
  $isSelected?: boolean;
  $leadingItem?: React.ReactNode;
  $trailingItem?: React.ReactNode;
  onClick?: () => void;
}
export interface DropdownProps {
  $label?: string;
  $size: TextInputProps["$size"];
  $placeholder: string;
  $options: DropdownItemProps[];
  $isDisabled?: boolean;
  $value: string | number | undefined;
  $helpText?: TextInputProps["$helpText"];
  onChange: (value: string | number) => void;
}

