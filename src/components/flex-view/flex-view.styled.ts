import type { FlexViewProps } from "./flex-view-types";
import styled from "styled-components";

export const FlexContainer = styled.div<FlexViewProps>`
  display: flex;
  background-color: ${({ background = "opacity-transparent", theme }) =>
    theme.colors[background]};
  flex-direction: ${({ $direction = "row" }) => $direction};
  justify-content: ${({ $justifyContent = "flex-start" }) => $justifyContent};
  align-items: ${({ $alignItems = "stretch" }) => $alignItems};
  flex-wrap: ${({ $wrap = "nowrap" }) => $wrap};
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
  gap: ${({ $gap = 0, $gapX = 0, theme }) => {
    if ($gap !== 0) {
      return `${$gap}px`;
    }
    if ($gapX !== 0) {
      return `${$gapX * theme.spacing.GAP}px`;
    }
    return "0px";
  }};
  margin-bottom: ${({ $marginBottomX = 0, theme }) =>
    $marginBottomX ? `${$marginBottomX * theme.spacing.GUTTER}px` : "0px"};
`;
