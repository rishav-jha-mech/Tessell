import styled from "styled-components";

export const ContentWrapper = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.colors["surface-50"]};
  gap: ${({ theme }) => theme.spacing.GAP}px;
`;

export const CreateServiceSectionWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors["surface-0"]};
  border-radius: 4px;
  width: 100%;
  max-width: 380px;
`;

export const ContentContainer = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.colors["surface-0"]};
  padding: ${({ theme }) => theme.spacing.GUTTER}px;
  border-radius: 4px;
`;
