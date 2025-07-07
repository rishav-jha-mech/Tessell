import styled from "styled-components";
import type { ColorKeys } from "../../theme/theme-colors/theme-colors";
import { AppIcons, type AppIconKeys } from "../../assets/icons";

type TableButtonProps = {
  $icon?: AppIconKeys;
  $label?: string;
  $color?: ColorKeys;
  $onClick?: () => void;
  $disabled?: boolean;
};
const TableButton: React.FC<TableButtonProps> = (props) => {
  const { $icon, $label, $onClick, $disabled } = props;
  const Icon = $icon ? AppIcons[$icon] : null;
  return (
    <TextButtonStyled {...props} onClick={$onClick} disabled={$disabled}>
      {Icon && <Icon />}
      {$label}
    </TextButtonStyled>
  );
};

export default TableButton;

const TextButtonStyled = styled.button<TableButtonProps>`
  background-color: transparent;
  color: ${({ theme, $color }) => theme.colors[$color || "primary-200"]};
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  height: 32px;
  font-size: 1rem;
  border-radius: 4px;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors["secondary-0"]};
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;
