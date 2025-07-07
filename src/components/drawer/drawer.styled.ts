import styled from "styled-components";
import { DRAWER_WIDTH } from "./drawer-constants";

export const DrawerWrapper = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  width: ${DRAWER_WIDTH}px;

  transition: transform 0.3s ease-in-out;
  transform: ${({ $isOpen }) =>
    $isOpen ? "translateX(0)" : "translateX(-100%)"};

  padding: ${({ theme }) => theme.spacing.GUTTER}px;
  background-color: ${({ theme }) => theme.colors["surface-0"]};
  border-right: 1px solid ${({ theme }) => theme.colors["surface-100"]};
`;

export const CloseDrawerBtnWrapper = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: 41%;
  right: -12px;
  background-color: ${({ theme }) => theme.colors["inverse"]};
  transition: transform 0.3s ease-in-out;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
`;
