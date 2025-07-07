import type { Meta, StoryObj } from "@storybook/react-vite";
import { useEffect, useState } from "react";
import FlexView from "../../components/flex-view/flex-view";
import { Table } from "../../components/table/table";
import type { HeaderData, RowData } from "../../components/table/table-types";
import {
  buildDeleteCell,
  buildLinkCell,
  buildTitleCell,
  createTableRows,
} from "../../components/table/table-utils";

const meta: Meta<typeof Table> = {
  title: "Components/Table",
  component: Table,
};
export default meta;

type Story = StoryObj<typeof Table>;

const TableStory = () => {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [tableRows, setTableRows] = useState<RowData[][]>([]);

  function handleDeleteRow(rowId: number) {
    setTableRows((prev) => prev.filter((row) => row[0].id !== rowId));
    setSelectedRows((prev) => prev.filter((id) => id !== rowId));
  }

  useEffect(() => {
    const rows = createTableRows(10, [
      buildLinkCell({
        href: "https://example.com",
        text: "Link",
      }),
      buildTitleCell({ title: "Row Title" }),
      buildDeleteCell(handleDeleteRow),
    ]);
    setTableRows(rows);
  }, []);

  const headers: HeaderData[] = [
    { title: "Header", sortable: true, justifyContent: "flex-start" },
    { title: "Header", sortable: true, justifyContent: "flex-start" },
    { title: "Header", sortable: true, justifyContent: "flex-end" },
  ];

  return (
    <FlexView>
      <Table
        headers={headers}
        rows={tableRows}
        selectedRows={selectedRows}
        setSelectedRows={setSelectedRows}
      />
    </FlexView>
  );
};

export const Default: Story = {
  render: () => <TableStory />,
};
