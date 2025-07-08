import styled from "styled-components";
import FlexView from "../../components/flex-view/flex-view";
import { MediaQuery } from "../../theme/constants/media-query";

export const ContentWrapper = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.colors["surface-50"]};
  gap: ${({ theme }) => theme.spacing.GAP}px;
`;

export const ContentArea = styled(FlexView)`
  flex: 1;
  gap: ${({ theme }) => theme.spacing.GAP}px;
  padding: ${({ theme }) => `0 ${theme.spacing.PAGE_PADDING}px`};
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  ${MediaQuery.minWidthDesktop} {
    flex-direction: row;
  }
`;

export const CreateServiceSectionWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors["surface-0"]};
  border-radius: 4px;
  width: 100%;

  ${MediaQuery.minWidthDesktop} {
    max-width: 380px;
  }
`;

export const ContentContainer = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors["surface-0"]};
  border-radius: 4px;
  padding-top: ${({ theme }) => theme.spacing.GUTTER}px;
  padding-bottom: ${({ theme }) => theme.spacing.GUTTER}px;
  padding-left: ${({ theme }) => theme.spacing.GUTTER}px;
  padding-right: ${({ theme }) => theme.spacing.GUTTER * 1.75}px;
`;

export const LoadingOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  backdrop-filter: blur(2px);
  --webkit-backdrop-filter: blur(2px);

  display: flex;
  justify-content: center;
  align-items: center;
`;
