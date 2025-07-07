import styled, { css } from "styled-components";
import type { TextProps } from "./text-types";

type StyledTextProps = Omit<TextProps, "children">;

export const TextBase = styled.span<StyledTextProps>`
  ${({
    theme,
    $renderAs,
    $color,
    $displayAs,
    $userSelect = "text",
    $marginHorizontal,
    $marginVertical,
  }) => {
    const variant = theme.text[$renderAs];
    return css`
      font-family: ${variant.fontFamily};
      font-size: ${variant.fontSize};
      line-height: ${variant.lineHeight};
      font-weight: ${variant.fontWeight};
      letter-spacing: ${variant.letterSpacing};
      vertical-align: ${variant.verticalAlign};
      color: ${$color === "inherit"
        ? "inherit"
        : $color
        ? theme.colors[$color]
        : theme.colors.primary};
      display: ${$displayAs};
      user-select: ${$userSelect};
      margin: ${$marginVertical || "0"} ${$marginHorizontal || "0"};
      text-align: ${$displayAs === "inline" ? "inherit" : "left"};
    `;
  }}
`;
