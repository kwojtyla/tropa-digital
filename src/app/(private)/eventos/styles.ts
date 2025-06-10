import styled from "styled-components";

export const Container = styled.main`
  background-color: #f8f8f8;
  padding: 30px;
  height: 100%;
  width: 100%;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 12px;
  text-wrap: nowrap;

  h1 {
    font-size: 20px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary};
  }

  p {
    font-size: 16px;
    color: #636363;
  }

  b {
    color: black;
  }
`;

export const TableContainer = styled.div`
  padding-top: 30px;
`;
