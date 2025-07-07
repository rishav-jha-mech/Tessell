import styled from "styled-components";
import FlexView from "../flex-view/flex-view";
import { MediaQuery } from "../../theme/constants/media-query";

export const HeaderWrapper = styled(FlexView)`
  background: ${({ background }) => background};
  padding: ${({ theme }) => `0 ${theme.spacing.GAP}px`};
  min-height: ${({ theme }) => theme.spacing.GUTTER * 3}px;

  justify-content: space-between;
  align-items: center;
`;

export const HeaderIconContent = styled(FlexView)`
  gap: ${({ theme }) => theme.spacing.GUTTER / 2}px;
  align-items: center;
  flex-direction: row;
  display: none;

  ${MediaQuery.minWidthDesktop} {
    display: flex;
  }
`;
