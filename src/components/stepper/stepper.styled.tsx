import styled from "styled-components";

export const StepperContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StepItem = styled.div<{ isClickable: boolean }>`
  display: flex;
  align-items: flex-start;
  cursor: ${({ isClickable }) => (isClickable ? "pointer" : "default")};
  position: relative;
`;

export const Dot = styled.div<{
  $isCompleted: boolean;
  $isLast: boolean;
  $isFirst: boolean;
  $lineHeight: number;
  $isLineCompleted: boolean;
}>`
  position: relative;
  width: 5px;
  height: 5px;
  border-radius: 3px;
  background-color: ${({ theme, $isCompleted }) =>
    $isCompleted ? theme.colors["primary-200"] : theme.colors["surface-200"]};
  margin-right: 12px;
  margin-top: 8px;
  box-sizing: border-box;

  &::after {
    content: "";
    position: absolute;
    top: ${({ $isFirst }) => ($isFirst ? "7px" : "100%")};
    border-top-left-radius: ${({ $isFirst }) => ($isFirst ? "1px" : "0")};
    border-top-right-radius: ${({ $isFirst }) => ($isFirst ? "1px" : "0")};
    left: 50%;
    width: 1px;
    transform: translateX(-50%);
    height: ${({ $lineHeight }) => `${$lineHeight - 2.5}px`};
    background-color: ${({ theme, $isLineCompleted }) =>
      $isLineCompleted
        ? theme.colors["primary-200"]
        : theme.colors["surface-200"]};
    display: ${({ $isLast }) => ($isLast ? "none" : "block")};
  }
`;

export const Label = styled.span<{ $isActive: boolean }>`
  color: ${({ theme, $isActive }) =>
    $isActive ? theme.colors["primary-200"] : theme.colors["primary"]};
  font-weight: ${({ $isActive }) => ($isActive ? 600 : 400)};
`;

export const StepContent = styled.div`
  margin-left: 17px;
  margin-top: 8px;
`;
