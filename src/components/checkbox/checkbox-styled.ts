import styled, { css } from "styled-components";
import type { ThemeCheckboxType } from "../../theme/theme-checkbox/theme-checkbox-types";

interface StyledBoxProps {
  $variant: keyof ThemeCheckboxType["variants"];
  $size: keyof ThemeCheckboxType["sizes"];
  $checked?: boolean | null;
  disabled?: boolean;
}

export const HiddenCheckbox = styled.input`
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

export const StyledBox = styled.span<StyledBoxProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 0;
  gap: 0;
  border-width: 1px;
  border-style: solid;
  transition: all 0.2s;

  ${({ theme, $variant, $size, $checked, disabled }) => {
    const { variants, sizes } = theme.checkbox as ThemeCheckboxType;
    const states = variants[$variant];
    const sizeConfig = sizes[$size];
    const colors = theme.colors;

    const radius = 4;
    const outlineWidth = 4;
    const outlineRadius = 4;
    const outlineColor = colors["border-focus"];

    return css`
      width: ${sizeConfig.size}px;
      height: ${sizeConfig.size}px;
      border-radius: ${radius}px;

      svg {
        width: ${sizeConfig.checkIconSize}px;
        height: ${sizeConfig.checkIconSize}px;
      }

      ${disabled
        ? css`
            background-color: ${colors[states.disabled.background]};
            border-color: ${colors[states.disabled.border]};
            color: ${colors[states.disabled.icon]};
          `
        : css`
            ${$checked === undefined || $checked === null
              ? css`
                  background-color: ${colors[states.intermediate.background]};
                  border-color: ${colors[states.intermediate.border]};
                  color: ${colors[states.intermediate.icon]};
                `
              : $checked === false
              ? css`
                  background-color: ${colors[states.default.background]};
                  border-color: ${colors[states.default.border]};
                  color: ${colors[states.default.icon]};
                `
              : css`
                  background-color: ${colors[states.active.background]};
                  border-color: ${colors[states.active.border]};
                  color: ${colors[states.active.icon]};
                `}

            &:hover {
              background-color: ${colors[states.hover.background]};
              border-color: ${colors[states.hover.border]};
              color: ${colors[states.hover.icon]};
            }

            &:active {
              outline-style: solid;
              outline-width: ${outlineWidth}px;
              outline-color: ${outlineColor};
              border-radius: ${outlineRadius}px;
            }
          `}
    `;
  }}
`;
