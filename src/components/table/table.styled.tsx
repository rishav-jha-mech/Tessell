import styled from "styled-components";

export const TableContainer = styled.div`
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors["surface-200"]};
  overflow: hidden;
  border-collapse: separate;
  border-spacing: 0;
  width: 100%;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;
