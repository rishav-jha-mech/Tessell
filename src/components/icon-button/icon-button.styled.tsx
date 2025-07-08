import styled, { css } from "styled-components";
import type { IconButtonProps } from "./icon-button-types";

export const IconButtonBase = styled.button<IconButtonProps>`
  ${({
    theme,
    $variant,
    $size,
    disabled,
    $margin,
    $rounded,
    $borderless = true,
    $iconColor,
  }) => {
    const {
      active,
      default: defaultStyle,
      disabled: disabledStyle,
      focus,
      hover,
    } = theme.iconButton.variants[$variant];
    const { iconSize, buttonRadius } =
      theme.iconButton.sizes[$size];

    return css`
      height: ${iconSize}px;
      width: ${iconSize}px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: ${$rounded ? "50%" : `${buttonRadius}px`};
      background: transparent;
      cursor: ${disabled ? "not-allowed" : "pointer"};
      transition: color 0.2s ease;
      border: ${$borderless
        ? "none"
        : `1px solid ${theme.colors["border-icon-button"]}`};
      padding: 0;
      margin: ${$margin}px;
      color: ${!disabled
        ? theme.colors[$iconColor || defaultStyle.iconColor]
        : theme.colors[disabledStyle.iconColor]};

      svg {
        height: ${iconSize}px;
        width: ${iconSize}px;
      }

      &:hover {
        color: ${!disabled && theme.colors[hover.iconColor]};
      }

      &:focus {
        outline: ${focus.outlineWidth}px solid
          ${!disabled && theme.colors[focus.outlineColor]};
        outline-offset: 2px;
        animation-delay: 70ms;
        animation-timing-function: cubic-bezier(0.3, 0, 0.2, 1);
        animation-duration: 70ms;
      }

      &:active {
        color: ${!disabled && theme.colors[active.iconColor]};
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
