import styled from "styled-components";
import { DRAWER_WIDTH } from "../../components/drawer/drawer-constants";

export const MainContent = styled.div<{ $isDrawerOpen: boolean }>`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors["surface-50"]};
  margin-left: ${({ $isDrawerOpen, theme }) =>
    $isDrawerOpen ? `${DRAWER_WIDTH + theme.spacing.GUTTER * 2}px` : "0"};
  transition: all 0.3s ease;
`;
