import React from "react";
import { AppIcons } from "../../assets/icons";
import Separator from "../separator/separator";
import { Text } from "../text/text";
import { HiddenCheckbox, StyledBox, StyledLabel } from "./checkbox-styled";
import type { CheckboxProps } from "./checkbox-types";

export const Checkbox: React.FC<CheckboxProps> = ({
  $label,
  $variant = "primary",
  $size = "default",
  $disabled,
  $checked,
  $indeterminate,
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
        $intermediate={$indeterminate}
        disabled={$disabled}
      >
        {$checked === true && <AppIcons.CheckboxCheck />}
        {$indeterminate && <AppIcons.CheckboxMinus />}
      </StyledBox>
      <Separator widthX={0.5} />
      <Text $renderAs="Text-body/primary/primary">{$label}</Text>
    </StyledLabel>
  );
};
