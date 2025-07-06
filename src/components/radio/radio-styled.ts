import styled, { css } from "styled-components";
import type { ThemeRadioType } from "../../theme/theme-radio/theme-radio-types";

interface StyledRadioProps {
  $variant: keyof ThemeRadioType["variants"];
  $size: keyof ThemeRadioType["sizes"];
  $checked?: boolean;
  disabled?: boolean;
}

export const HiddenRadio = styled.input`
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

interface StyledRadioProps {
  $variant: keyof ThemeRadioType["variants"];
  $size: keyof ThemeRadioType["sizes"];
  $checked?: boolean;
  disabled?: boolean;
}

export const StyledRadio = styled.span<StyledRadioProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  border-width: 1px;
  border-style: solid;
  border-radius: 50%;
  transition: all 0.2s ease-in-out;

  ${({ theme, $variant, $size, $checked, disabled }) => {
    const states = theme.radio.variants[$variant];
    const sizes = theme.radio.sizes[$size];
    const colors = theme.colors;

    const outlineWidth = 4;
    const outlineColor = colors["border-focus"];

    return css`
      display: inline-flex;
      align-items: center;
      justify-content: center;
      
      width: ${sizes.size}px;
      height: ${sizes.size}px;

      background-color: ${disabled
        ? colors[states.disabled.background]
        : colors[states.default.background]};
      border-color: ${disabled
        ? colors[states.disabled.border]
        : $checked
        ? colors[states.active.border]
        : colors[states.default.border]};

      ${!disabled &&
      css`
        &:hover {
          background-color: ${colors[states.hover.background]};
          border-color: ${colors[states.hover.border]};
        }

        &:active {
          outline-style: solid;
          outline-width: ${outlineWidth}px;
          outline-color: ${outlineColor};
          border-radius: 50%;
        }
      `}

      &::after {
        content: "";
        display: ${$checked ? "block" : "none"};
        width: ${sizes.dotSize}px;
        height: ${sizes.dotSize}px;
        background-color: ${disabled
          ? colors[states.disabled.dot]
          : colors[states.active.dot]};
        border-radius: 50%;
      }
    `;
  }}
`;
