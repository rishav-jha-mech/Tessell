import styled from "styled-components";

export const Wrapper = styled.div`
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
