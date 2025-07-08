import styled from "styled-components";
import type { SeparatorProps } from "./separator-types";

export const SeparatorBase = styled.div<SeparatorProps>`
  background-color: ${({ background = "opacity-transparent", theme }) =>
    theme.colors[background]};

  width: ${({ width, $widthX = 0, theme }) => {
    if (typeof width === "number") return `${width}px`;
    if (typeof width === "string") return width;
    return `${$widthX * theme.spacing.GUTTER}px`;
  }};

  height: ${({ height, $heightX = 0, theme }) => {
    if (typeof height === "number") return `${height}px`;
    if (typeof height === "string") return height;
    return `${$heightX * theme.spacing.GUTTER}px`;
  }};
`;
