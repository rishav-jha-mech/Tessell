import styled, { css } from "styled-components";
import type { IconButtonProps } from "./icon-button-types";

export const IconButtonBase = styled.button<
  Required<Pick<IconButtonProps, "$variant" | "$size">> & {
    disabled?: boolean;
  }
>`
  ${({ theme, $variant, $size, disabled }) => {
    const variant = theme.iconButton.variants[$variant];
    const size = theme.iconButton.sizes[$size];

    const state = disabled ? variant.disabled : variant.default;

    const iconColor = theme.colors[state.iconColor ?? "inverse"];

    return css`
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: ${size.iconRadius * 2}px;
      height: ${size.iconRadius * 2}px;
      border-radius: 50%;
      background: transparent;
      cursor: ${disabled ? "not-allowed" : "pointer"};
      color: ${iconColor};
      transition: color 0.2s ease;

      &:hover {
        color: ${!disabled &&
        theme.colors[variant.hover.iconColor ?? "inverse"]};
      }

      &:focus-visible {
        outline: 2px solid
          ${!disabled && theme.colors[variant.focus.iconColor ?? "inverse"]};
        outline-offset: 2px;
      }

      &:active {
        color: ${!disabled &&
        theme.colors[variant.active.iconColor ?? "inverse"]};
      }

      pointer-events: ${disabled ? "none" : "auto"};
    `;
  }}
`;

export const IconWrapper = styled.span<{ iconSize: number }>`
  display: inline-flex;
  width: ${({ iconSize }) => iconSize}px;
  height: ${({ iconSize }) => iconSize}px;

  svg {
    width: 100%;
    height: 100%;
  }
`;
