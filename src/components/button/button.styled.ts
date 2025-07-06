import styled, { css } from "styled-components";
import type { ButtonProps } from "./button-types";

export const ButtonBase = styled.button<
  Required<
    Pick<ButtonProps, "$type" | "$size" | "$isFullWidth" | "$iconOnly">
  > & {
    disabled?: boolean;
  }
>`
  ${({ theme, $type, $size, $isFullWidth, $iconOnly, disabled }) => {
    const variant = theme.buttons.variants[$type];
    const size = theme.buttons.sizes[$size];
    const IconStyle = size.iconStyle;
    const textVariant = theme.text[size.textRenderAs];

    const defaultBg = theme.colors[variant.default.background];
    const defaultFg = theme.colors[variant.default.color];
    const hoverBg = variant.hover?.background
      ? theme.colors[variant.hover.background]
      : defaultBg;
    const hoverFg = variant.hover?.color
      ? theme.colors[variant.hover.color]
      : defaultFg;

    const focusOutlineColor = variant.focus?.outlineColor
      ? theme.colors[variant.focus.outlineColor]
      : "transparent";

    const backgroundColor = disabled
      ? theme.colors[variant.disabled.background]
      : defaultBg;

    const textColor = disabled
      ? theme.colors[variant.disabled.color]
      : defaultFg;

    return css`
      display: inline-flex;
      align-items: center;
      justify-content: center;

      height: ${$iconOnly ? `${IconStyle.iconSize}px` : "auto"};
      width: ${
        $isFullWidth ? "100%" : $iconOnly ? `${IconStyle.iconSize}px` : "auto"
      };
      min-width: ${$iconOnly ? "0" : `${size.minWidth}px`};
      padding: ${$iconOnly ? "0" : size.padding};
      border: none;
      border-radius: ${size.radius}px;

      background-color: ${backgroundColor};
      color: ${textColor};
      cursor: ${disabled ? "not-allowed" : "pointer"};
      pointer-events: ${disabled ? "none" : "auto"};

      font-family: ${textVariant.fontFamily};
      font-size: ${textVariant.fontSize};
      line-height: ${textVariant.lineHeight};
      font-weight: ${textVariant.fontWeight};

      transition: all 0.2s ease-in-out;

      &:hover {
        background-color: ${!disabled && hoverBg};
        color: ${!disabled && hoverFg};
      }

      &:focus {
        outline-style: solid;
        outline-width: ${variant.focus?.outlineWidth || 0}px;
        outline-color: ${focusOutlineColor};
        border-radius: ${variant.focus?.outlineBorderRadius || size.radius}px;
      }

      &:disabled {
        background-color: ${theme.colors[variant.disabled.background]};
        color: ${theme.colors[variant.disabled.color]};
        cursor: not-allowed;
        pointer-events: none;
      }
    `;
  }}
`;

export const Loader = styled.div`
  border: 2px solid transparent;
  border-top: 2px solid currentColor;
  border-right: 2px solid currentColor;
  border-radius: 50%;
  width: 1em;
  height: 1em;
  animation: spin 0.5s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
