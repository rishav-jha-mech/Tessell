import styled from "styled-components";
import { Text } from "../text/text";
import FlexView from "../flex-view/flex-view";

export const DropdownWrapper = styled.div<{ $disabled?: boolean }>`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  pointer-events: ${({ $disabled }) => ($disabled ? "none" : "auto")};
  opacity: ${({ $disabled }) => ($disabled ? 0.6 : 1)};
`;

export const Caret = styled.div<{ $isOpen: boolean }>`
  display: flex;
  transform: rotate(${({ $isOpen }) => ($isOpen ? "180deg" : "0deg")});
  transition: transform 0.2s ease;
`;

export const OptionsList = styled.ul<{ helpTextPresent: boolean }>`
  position: absolute;
  background-color: ${({ theme }) => theme.colors["inverse"]};
  top: ${({ helpTextPresent }) => (helpTextPresent ? "72px" : "36px")};
  left: 0;
  right: 0;
  padding: 0 0;
  border-radius: 4px;
  z-index: 10;
  list-style: none;
`;

export const DropdownItemBase = styled(FlexView)<{ $isSelected: boolean }>`
  height: 36px;
  padding: 0 8px;
  border-radius: 4px;
  cursor: pointer;
  color: ${({ $isSelected, theme }) =>
    $isSelected ? theme.colors["primary-200"] : theme.colors["primary"]};

  svg {
    color: ${({ theme }) => theme.colors["subtlest"]};
  }

  &:hover {
    color: ${({ theme }) => theme.colors["primary-200"]};
    background-color: ${({ theme }) => theme.colors["secondary-0"]};
  }
  &:hover svg {
    color: ${({ theme }) => theme.colors["primary-200"]};
  }
`;

export const LeadingItem = styled.div`
  margin-right: 8px;
  display: flex;
  align-items: center;
`;

export const TrailingItem = styled.div`
  margin-left: 8px;
  display: flex;
  align-items: center;
`;

export const ItemTitle = styled(Text)`
  flex: 1;
`;
