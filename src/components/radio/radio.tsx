import React from "react";
import { HiddenRadio, StyledLabel, StyledRadio } from "./radio-styled";
import type { RadioProps } from "./radio-types";

export const Radio: React.FC<RadioProps> = ({
  $variant = "primary",
  $size = "regular",
  $checked,
  disabled,
  ...props
}) => {
  return (
    <StyledLabel disabled={disabled}>
      <HiddenRadio
        type="radio"
        checked={$checked}
        disabled={disabled}
        {...props}
      />
      <StyledRadio
        $variant={$variant}
        $size={$size}
        $checked={$checked}
        disabled={disabled}
      />
    </StyledLabel>
  );
};
