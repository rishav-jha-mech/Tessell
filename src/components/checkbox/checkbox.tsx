import React from "react";
import type { CheckboxProps } from "./checkbox-types";
import { HiddenCheckbox, StyledBox, StyledLabel } from "./checkbox-styled";
import { AppIcons } from "../../assets/icons";

export const Checkbox: React.FC<CheckboxProps> = ({
  $variant = "primary",
  $size = "default",
  $disabled,
  $checked,
  ...props
}) => {
  return (
    <StyledLabel disabled={$disabled}>
      <HiddenCheckbox
        type="checkbox"
        disabled={$disabled}
        checked={$checked}
        {...props}
      />

      <StyledBox
        $variant={$variant}
        $size={$size}
        $checked={$checked}
        disabled={$disabled}
      >
        {$checked === true && <AppIcons.CheckboxCheck />}
        {$checked === false && <AppIcons.CheckboxMinus />}
      </StyledBox>
    </StyledLabel>
  );
};
