import styled, { css } from "styled-components";
import type { IconButtonProps } from "./icon-button-types";

export const IconButtonBase = styled.button<
  Required<Pick<IconButtonProps, "$variant" | "$size">> & {
    disabled?: boolean;
  }
>`
  ${({ theme, $variant, $size, disabled }) => {
    const variant = theme.iconButton.variants[$variant];
    const { iconSize, buttonRadius } =
      theme.iconButton.sizes[$size];

    return css`
      height: ${iconSize}px;
      width: ${iconSize}px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: ${buttonRadius}px;
      background: transparent;
      cursor: ${disabled ? "not-allowed" : "pointer"};
      transition: color 0.2s ease;
      border: none;
      padding: 0;

      svg {
        height: ${iconSize}px;
        width: ${iconSize}px;
      }

      &:hover {
        color: ${!disabled &&
        theme.colors[variant.hover.iconColor ?? "inverse"]};
      }

      &:focus {
        outline: ${variant.focus.outlineWidth}px solid
          ${!disabled &&
          theme.colors[variant.focus.outlineColor ?? "border-focus"]};
        outline-offset: 2px;
        animation-delay: 70ms;
        animation-timing-function: cubic-bezier(0.3, 0, 0.2, 1);
        animation-duration: 70ms;
      }

      &:active {
        color: ${!disabled &&
        theme.colors[variant.active.iconColor ?? "inverse"]};
      }

      pointer-events: ${disabled ? "none" : "auto"};
    `;
  }}
`;

export const IconWrapper = styled.span`
  svg {
    display: block;
  }
`;
