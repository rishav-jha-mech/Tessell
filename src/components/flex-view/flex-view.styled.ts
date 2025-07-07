import type { FlexViewProps } from "./flex-view-types";
import styled from "styled-components";

export const FlexContainer = styled.div<FlexViewProps>`
  display: flex;
  background-color: ${({ $background = "opacity-transparent", theme }) =>
    theme.colors[$background]};
  flex-direction: ${({ $direction = "row" }) => $direction};
  justify-content: ${({ $justifyContent = "flex-start" }) => $justifyContent};
  align-items: ${({ $alignItems = "stretch" }) => $alignItems};
  flex-wrap: ${({ $wrap = "nowrap" }) => $wrap};
  gap: ${({ $gap = 0 }) => `${$gap}px`};
  flex: ${({ $flex = "none" }) => $flex};
  border-radius: ${({ $borderRadius = 0 }) => `${$borderRadius}px`};
  height: ${({ height = "auto" }) =>
    typeof height === "number" ? `${height}px` : height};
  width: ${({ width = "auto" }) =>
    typeof width === "number" ? `${width}px` : width};
  padding: ${({ $paddingHorizontal = 0, $paddingVertical = 0 }) =>
    `${$paddingVertical}px ${$paddingHorizontal}px`};
  border-top: ${({ $borderTopWidth = 0 }) => $borderTopWidth}px solid
    ${({ theme }) => theme.colors["surface-100"]};
`;
