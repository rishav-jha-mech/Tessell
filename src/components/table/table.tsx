import { TableHeader } from "./table-header";
import { TableRow } from "./table-row";
import type { TableProps } from "./table-types";
import * as S from "./table.styled";

export const Table: React.FC<TableProps> = ({
  headers,
  rows,
  selectedRows,
  setSelectedRows,
}) => {
  const rowIds = rows.map((row) => row[0].id);
  const isAllSelected = selectedRows.length === rows.length;

  const toggleSelectAll = () => {
    setSelectedRows(isAllSelected ? [] : rowIds);
  };

  const toggleSelectRow = (rowId: number) => {
    setSelectedRows((prev) =>
      prev.includes(rowId)
        ? prev.filter((id) => id !== rowId)
        : [...prev, rowId]
    );
  };

  return (
    <S.TableContainer>
      <S.StyledTable>
        <thead>
          <TableHeader
            isAllSelected={isAllSelected}
            onSelectAll={toggleSelectAll}
            headers={headers}
          />
        </thead>
        <tbody>
          {rows.map((row) => {
            const rowId = row[0].id;
            return (
              <TableRow
                key={rowId}
                isSelected={selectedRows.includes(rowId)}
                onSelect={() => toggleSelectRow(rowId)}
                items={row}
                isLastRow={rowId === rows[rows.length - 1][0].id}
              />
            );
          })}
        </tbody>
      </S.StyledTable>
    </S.TableContainer>
  );
};
