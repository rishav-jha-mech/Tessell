import styled, { css } from "styled-components";
import type { TextProps } from "./text-types";

type StyledTextProps = Omit<TextProps, "children">;

export const Text = styled.span<StyledTextProps>`
  ${({ theme, $renderAs, $color, $displayAs }) => {
    const variant = theme.typography[$renderAs];
    return css`
      font-family: ${variant.fontFamily};
      font-size: ${variant.fontSize};
      line-height: ${variant.lineHeight};
      font-weight: ${variant.fontWeight};
      letter-spacing: ${variant.letterSpacing};
      vertical-align: ${variant.verticalAlign};
      color: ${$color ? theme.colors[$color] : theme.colors.primary};
      display: ${$displayAs};
    `;
  }}
`;
