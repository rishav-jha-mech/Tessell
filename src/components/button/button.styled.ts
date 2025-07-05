import styled, { css } from "styled-components";
import type { ButtonProps } from "./button-types";

export const ButtonBase = styled.button<
  Required<Pick<ButtonProps, "$type" | "$size" | "$ifFullWidth" | "$iconOnly">> & {
    disabled?: boolean;
  }
>`
  ${({ theme, $type, $size, $ifFullWidth, $iconOnly, disabled }) => {
    const variant = theme.buttons.variants[$type];
    const size = theme.buttons.sizes[$size];
    const textVariant = theme.text[size.textRenderAs];

    const bg = disabled
      ? theme.colors[variant.disabled.background]
      : theme.colors[variant.default.background];

    const fg = disabled
      ? theme.colors[variant.disabled.color]
      : theme.colors[variant.default.color];

    const hoverBg = variant.hover?.background
      ? theme.colors[variant.hover.background]
      : bg;

    const hoverColor = variant.hover?.color
      ? theme.colors[variant.hover.color]
      : fg;

    const focusOutlineColor = variant.focus?.outlineColor
      ? theme.colors[variant.focus.outlineColor]
      : undefined;

    return css`
      display: inline-flex;
      align-items: center;
      justify-content: center;
      cursor: ${disabled ? "not-allowed" : "pointer"};
      border: none;
      border-radius: ${size.radius}px;
      padding: ${$iconOnly ? "8px" : size.padding};
      background: ${bg};
      width: ${$ifFullWidth ? "100%" : "auto"};
      min-width: ${size.minWidth}px;
      pointer-events: ${disabled ? "none" : "auto"};
      
      color: ${fg};
      font-family: ${textVariant.fontFamily};
      font-size: ${textVariant.fontSize};
      line-height: ${textVariant.lineHeight};
      font-weight: ${textVariant.fontWeight};
      
      transition: all 0.2s ease;
      
      &:hover {
        background: ${!disabled && hoverBg};
        color: ${!disabled && hoverColor};
      }

      &:focus {
        outline-style: solid;
        outline-width: ${variant.focus?.outlineWidth || 0}px;
        outline-color: ${focusOutlineColor};
        border-radius: ${variant.focus?.outlineBorderRadius || 0}px;
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
