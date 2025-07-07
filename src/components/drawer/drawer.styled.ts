import styled from "styled-components";

export const DrawerWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 219px;

  padding: ${({ theme }) => theme.spacing.GUTTER}px;
  background-color: ${({ theme }) => theme.colors["surface-0"]};
  border-right: 1px solid ${({ theme }) => theme.colors["surface-100"]};
`;

export const CloseDrawerBtnWrapper = styled.div`
  position: absolute;
  top: 45.2%;
  right: -12px;
  background-color: ${({ theme }) => theme.colors["inverse"]};
`;
