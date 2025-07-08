import styled, { css } from "styled-components";
import type { ThemeCheckboxType } from "../../theme/theme-checkbox/theme-checkbox-types";

interface StyledBoxProps {
  $variant: keyof ThemeCheckboxType["variants"];
  $size: keyof ThemeCheckboxType["sizes"];
  $checked?: boolean | null;
  $intermediate?: boolean;
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
  border-width: 1px;
  border-style: solid;
  transition: all 0.2s;

  ${({ theme, $variant, $size, $checked, $intermediate, disabled }) => {
    const { variants, sizes } = theme.checkbox as ThemeCheckboxType;
    const colors = theme.colors;

    const states = variants[$variant];
    const sizeConfig = sizes[$size];

    let variantStateKey: keyof typeof states = "unchecked";
    if ($intermediate) {
      variantStateKey = "intermediate";
    } else if ($checked) {
      variantStateKey = "active";
    }

    let interactionKey: keyof typeof states.unchecked = "default";
    if (disabled) {
      interactionKey = "disabled";
    }

    const variantState = states[variantStateKey];
    const style = variantState[interactionKey];

    return css`
      width: ${sizeConfig.size}px;
      height: ${sizeConfig.size}px;
      border-radius: 4px;

      background-color: ${colors[style.backgroundColor]};
      border-color: ${colors[style.borderColor]};
      color: ${style.iconColor ? colors[style.iconColor] : "inherit"};

      position: relative;

      svg {
        width: ${sizeConfig.checkIconSize}px;
        height: ${sizeConfig.checkIconSize}px;
      }

      .checkbox-icon {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }

      .checkbox-icon.check {
        opacity: ${$checked && !$intermediate ? 1 : 0};
      }

      .checkbox-icon.minus {
        opacity: ${$intermediate ? 1 : 0};
      }

      ${!disabled &&
      css`
        &:hover {
          background-color: ${colors[variantState.hover.backgroundColor]};
          border-color: ${colors[variantState.hover.borderColor]};
          color: ${variantState.hover.iconColor
            ? colors[variantState.hover.iconColor]
            : "inherit"};
        }

        &:active {
          background-color: ${colors[variantState.active.backgroundColor]};
          border-color: ${colors[variantState.active.borderColor]};
          color: ${variantState.active.iconColor
            ? colors[variantState.active.iconColor]
            : "inherit"};
          outline-width: 4px;
          outline-style: solid;
          outline-color: ${colors["border-focus"]};
        }
      `}
    `;
  }}
`;
