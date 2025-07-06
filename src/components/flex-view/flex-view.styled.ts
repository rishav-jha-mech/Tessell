import type { FlexViewProps } from "./flex-view-types";
import styled from "styled-components";

export const FlexContainer = styled.div<FlexViewProps>`
  display: flex;
  background-color: ${({ $background = "inverse", theme }) =>
    theme.colors[$background]};
  flex-direction: ${({ $direction = "row" }) => $direction};
  justify-content: ${({ $justify = "flex-start" }) => $justify};
  align-items: ${({ $align = "stretch" }) => $align};
  flex-wrap: ${({ $wrap = "nowrap" }) => $wrap};
  gap: ${({ $gap = 0 }) => `${$gap}px`};
  padding: ${({ $padding = 0 }) => `${$padding}px`};
`;
