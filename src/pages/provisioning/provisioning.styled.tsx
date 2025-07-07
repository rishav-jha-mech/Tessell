import styled from "styled-components";

export const ContentWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors["surface-50"]};
  flex: 1;
  gap: ${({ theme }) => theme.spacing.GAP}px;
`;
