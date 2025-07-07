import React from "react";
import { HiddenRadio, StyledLabel, StyledRadio } from "./radio-styled";
import type { RadioProps } from "./radio-types";
import { Text } from "../text/text";
import Separator from "../separator/separator";

export const Radio: React.FC<RadioProps> = ({
  $label,
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
      <Separator widthX={0.5} />
      <Text $renderAs="Text-body/primary/primary">{$label}</Text>
    </StyledLabel>
  );
};
