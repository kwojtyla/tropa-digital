import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  background-color: #ffffff;
  border-radius: 10px;
  border: 1px solid #d6dfec;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Title = styled.h1`
  font-size: 24px;
  color: #333;
  margin-bottom: 8px;
  font-weight: 600;
`;

export const SearchContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`;

export const TableContainer = styled.div`
  background: white;
  overflow: hidden;
`;

export const MainTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHeader = styled.thead`
  background: transparent;
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #faf0eb;

  &:hover {
    background: #f8f9fa;
  }
`;

export const TableHeaderCell = styled.th`
  padding: 16px 20px;
  text-align: left;
  color: #e5b09a;
  font-size: 14px;
  font-weight: ${({ theme }) => theme.font.weight.medium};
`;

export const TableCell = styled.td`
  padding: 16px 20px;
  color: #495057;
  font-size: 14px;
`;

export const StatusDot = styled.div<{ $status: string }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ $status }) =>
    $status === "Ativo" ? "#4DEF00" : "#FF2764"};
`;

export const StatusCell = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const EmptyState = styled.div`
  padding: 60px 20px;
  text-align: center;
  color: #6c757d;
`;

export const EmptyIcon = styled.div`
  font-size: 48px;
  margin-bottom: 16px;
  color: #dee2e6;
`;

export const EmptyText = styled.p`
  font-size: 16px;
  margin: 0;
`;

export const Pagination = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: flex-end;
`;
