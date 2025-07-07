import styled from "styled-components";

export const Container = styled.div`
  padding: ${({ theme }) =>
    `${theme.spacing.GUTTER}px ${theme.spacing.GUTTER * 1.5}px `};
  padding-bottom: ${({ theme }) => theme.spacing.GUTTER * 0.5}px;
`;
