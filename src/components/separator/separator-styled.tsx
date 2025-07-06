import styled from "styled-components";
import type { SeparatorProps } from "./separator-types";

export const SeparatorBase = styled.div<SeparatorProps>`
  background-color: ${({ $background = "opacity-transparent", theme }) =>
    theme.colors[$background]};
  width: ${({ $width = 0 }) => `${$width}px`};
  height: ${({ $height = 0 }) => `${$height}px`};
`;
