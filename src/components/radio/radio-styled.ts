import styled, { css } from "styled-components";
import type { ThemeRadioType } from "../../theme/theme-radio/theme-radio-types";

interface StyledRadioProps {
  $variant: keyof ThemeRadioType["variants"];
  $size: keyof ThemeRadioType["sizes"];
  $checked?: boolean;
  disabled?: boolean;
}

export const HiddenRadio = styled.input.attrs({ type: "radio" })`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
`;

export const StyledLabel = styled.label<{ disabled?: boolean }>`
  display: inline-flex;
  align-items: center;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

export const StyledRadioInput = styled.span<StyledRadioProps>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  ${({ theme, $variant, $size, $checked, disabled }) => {
    const states = theme.radio.variants[$variant];
    const logical = $checked ? states.selected : states.unselected;
    const sizes = theme.radio.sizes[$size];
    const colors = theme.colors;

    const getState = (state: keyof typeof logical) => logical[state];

    return css`
      width: ${sizes.size}px;
      height: ${sizes.size}px;
      border-radius: 50%;
      border: 1px solid ${disabled
        ? colors[getState("disabled").borderColor]
        : colors[getState("default").borderColor]};
      background: ${disabled
        ? colors[getState("disabled").backgroundColor]
        : colors[getState("default").backgroundColor]};

      cursor: ${disabled ? "not-allowed" : "pointer"};

      &:hover {
        border-color: ${disabled
          ? colors[getState("disabled").borderColor]
          : colors[getState("hover").borderColor]};
        background: ${disabled
          ? colors[getState("disabled").backgroundColor]
          : colors[getState("hover").backgroundColor]};
      }

      &:active {
        outline: 4px solid ${colors["border-focus"]};
      }

      .dot {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: ${sizes.dotSize}px;
        height: ${sizes.dotSize}px;
        border-radius: 50%;
        background: ${disabled
          ? colors[getState("disabled").dotColor || "inverse"]
          : colors[getState("default").dotColor || "inverse"]};
        display: ${$checked ? "block" : "none"};
      }
    `;
  }}
`;
