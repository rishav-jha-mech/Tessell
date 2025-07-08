import React from "react";
import Separator from "../separator/separator";
import { Text } from "../text/text";
import { HiddenRadio, StyledLabel, StyledRadioInput } from "./radio-styled";
import type { RadioProps } from "./radio-types";

export const Radio: React.FC<RadioProps> = ({
  $label,
  $variant = "primary",
  $size = "regular",
  $checked,
  disabled,
  ...props
}) => {
  return (
    <StyledLabel>
      <HiddenRadio
        checked={$checked}
        onChange={props.onChange}
        disabled={disabled}
      />
      <StyledRadioInput
        $variant={$variant}
        $size={$size}
        $checked={$checked}
        disabled={disabled}
      >
        {$checked && <div className="dot" />}
      </StyledRadioInput>
      <Separator widthX={0.5} />
      <Text $renderAs="Text-body/primary/primary">{$label}</Text>
    </StyledLabel>
  );
};
