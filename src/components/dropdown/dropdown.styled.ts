import styled, { css } from "styled-components";
import { Text } from "../text/text";
import FlexView from "../flex-view/flex-view";
import type { DropdownProps } from "./dropdown-types";

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

export const OptionsList = styled.ul<{
  helpTextPresent: boolean;
  $size: DropdownProps["$size"];
}>`
  position: absolute;
  background-color: ${({ theme }) => theme.colors["inverse"]};
  left: 0;
  right: 0;
  padding: 0;
  border-radius: 4px;
  z-index: 10;
  list-style: none;
  box-shadow: 0 0 8px ${({ theme }) => theme.colors["surface-200"]};

  ${({ helpTextPresent, $size }) => {
    const getTopOffset = () => {
      switch ($size) {
        case "small":
          return helpTextPresent ? "72px" : "36px";
        case "default":
          return helpTextPresent ? "72px" : "55px";
        default:
          return "0";
      }
    };
    return css`
      top: ${getTopOffset()};
    `;
  }}
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
    color: ${({ theme, $isSelected }) =>
      theme.colors[$isSelected ? "primary-300" : "primary-200"]};
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
