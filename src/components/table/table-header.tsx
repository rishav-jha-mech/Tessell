import React from "react";
import styled from "styled-components";
import { Checkbox } from "../checkbox/checkbox";
import { AppIcons } from "../../assets/icons";
import { Text } from "../text/text";
import FlexView from "../flex-view/flex-view";
import type { TableHeaderProps } from "./table-types";

export const TableHeader: React.FC<TableHeaderProps> = ({
  isAllSelected,
  onSelectAll,
  headers,
}) => {
  return (
    <HeaderRow>
      <HeaderCell>
        <Checkbox $checked={isAllSelected} onChange={onSelectAll} />
      </HeaderCell>
      {headers.map((header) => (
        <HeaderCell key={header.title}>
          <FlexView
            $alignItems="center"
            $justifyContent={header.justifyContent || "flex-start"}
          >
            <Text $renderAs="heading/form titles" $color="primary-200">
              {header.title}
            </Text>
            {header.sortable && (
              <SortIcon>
                <AppIcons.Sort />
              </SortIcon>
            )}
          </FlexView>
        </HeaderCell>
      ))}
    </HeaderRow>
  );
};

const HeaderRow = styled.tr`
  background-color: ${({ theme }) => theme.colors["surface-secondary"]};
  border-bottom: 1px solid ${({ theme }) => theme.colors["surface-200"]};
`;

const HeaderCell = styled.th`
  padding: 16px 12px;
  text-align: left;
`;

const SortIcon = styled.span`
  margin-left: 8px;
  color: ${({ theme }) => theme.colors["subtlest"]};
  cursor: pointer;
`;
