import React from "react";
import styled from "styled-components";
import type { TableRowProps } from "./table-types";
import { Checkbox } from "../checkbox/checkbox";
import FlexView from "../flex-view/flex-view";

export const TableRow: React.FC<TableRowProps> = ({
  isSelected,
  items,
  onSelect,
  isLastRow = false,
}) => {
  return (
    <Row $isLastRow={isLastRow}>
      <Cell>
        <Checkbox $checked={isSelected} onChange={onSelect} />
      </Cell>
      {items.map((item, index) => (
        <Cell key={index}>
          <FlexView $alignItems="center" $justifyContent={item.justifyContent}>
            {item.item}
          </FlexView>
        </Cell>
      ))}
    </Row>
  );
};

const Row = styled.tr<{ $isLastRow?: boolean }>`
  border-bottom: 1px solid ${({ theme }) => theme.colors["surface-200"]};

  ${({ $isLastRow }) =>
    $isLastRow &&
    `
    border-bottom: none;
  `}
`;

const Cell = styled.td`
  padding: 12px;
`;
