import styled, { css } from "styled-components";
import type { TextInputProps } from "./text-input-types";
import type { ThemeTextInputType } from "../../theme/theme-text-input/theme-text-input-types";

export const InputWrapper = styled.div<{
  $disabled?: boolean;
  $focused?: boolean;
  $marginBottomX?: number;
  $maxWidth?: React.CSSProperties["maxWidth"];
}>`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${({ $maxWidth = "100%" }) => $maxWidth};
  margin-bottom: ${({ $marginBottomX = 0, theme }) =>
    $marginBottomX * theme.spacing.GUTTER}px;
`;

export const TextInputBaseWrapper = styled.div<{
  $height: number;
  $multiline: boolean;
}>`
  display: flex;
  position: relative;
  width: 100%;
  height: ${({ $height, $multiline }) =>
    $multiline ? "auto" : `${$height}px`};
`;

export const LeadingItemWrapper = styled.div<{
  $size: keyof ThemeTextInputType["sizes"];
}>`
  position: absolute;
  top: 0;
  left: ${({ theme, $size }) => theme.textInput.sizes[$size].paddingX}px;
  bottom: 0;
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TrailingItemWrapper = styled.div<{
  $size: keyof ThemeTextInputType["sizes"];
}>`
  position: absolute;
  top: 0;
  right: ${({ theme, $size }) => theme.textInput.sizes[$size].paddingX}px;
  bottom: 0;
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextInputBase = styled.input<TextInputProps>`
  ${({
    theme,
    $cursor = "text",
    $variant = "primary",
    $size = "default",
    $isSelected,
    $multiline = false,
    $leadingItem,
    $trailingItem,
    disabled,
  }) => {
    const variant = theme.textInput.variants[$variant];
    const size = theme.textInput.sizes[$size];
    const textVariant = theme.text[size.textVariant];

    let paddingLeft = size.paddingX;
    let paddingRight = size.paddingX;

    if ($leadingItem) {
      paddingLeft += 28;
    }
    if ($trailingItem) {
      paddingRight += 20;
    }

    const background = disabled
      ? theme.colors[variant.disabled.background]
      : theme.colors[variant.default.background];

    const borderColor = disabled
      ? theme.colors[variant.disabled.border]
      : $isSelected
      ? theme.colors[variant.selected.border]
      : theme.colors[variant.default.border];

    const textColor = disabled
      ? theme.colors[variant.disabled.text]
      : theme.colors[variant.default.text];

    const placeholderColor = disabled
      ? theme.colors[variant.disabled.placeholder]
      : theme.colors[variant.default.placeholder];

    const focusBorderColor = variant.focus?.border
      ? theme.colors[variant.focus.border]
      : borderColor;

    const outlineColor = variant.focus?.outlineColor
      ? theme.colors[variant.focus.outlineColor]
      : undefined;

    return css`
      ${$multiline &&
      css`
        padding: ${({ theme }) =>
          `${theme.spacing.GUTTER * 0.5}px ${theme.spacing.GUTTER * 0.75}px`};
        resize: none;
        height: 92px; // Default height for multiline input
      `}

      flex: 1;
      padding-left: ${paddingLeft}px;
      padding-right: ${paddingRight}px;

      background: ${background};
      border: 1px solid ${borderColor};
      border-radius: ${size.borderRadius}px;

      color: ${textColor};
      font-family: ${textVariant.fontFamily};
      font-size: ${textVariant.fontSize};
      font-weight: ${textVariant.fontWeight};

      cursor: ${$cursor};

      &::placeholder {
        color: ${placeholderColor};
      }

      &:focus {
        border-color: ${focusBorderColor};
        outline-style: solid;
        outline-width: ${variant.focus?.outlineWidth || 0}px;
        outline-color: ${outlineColor};
        border-radius: ${variant.focus?.outlineRadius || size.borderRadius}px;
      }

      &:disabled {
        cursor: not-allowed;
      }

      transition: all 0.2s ease;

      &[type="date"],
      &[type="time"] {
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        position: relative;
      }

      &[type="date"]::-webkit-calendar-picker-indicator,
      &[type="time"]::-webkit-calendar-picker-indicator {
        display: none;
        -webkit-appearance: none;
      }
    `;
  }}
`;
