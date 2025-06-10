"use client";

import Table from "./_components/table";
import { Header, TableContainer } from "./styles";
import { Container } from "./styles";

export default function Eventos() {
  return (
    <Container>
      <Header>
        <p>
          Bem vindo de volta, <b>Kaique Steck</b>
        </p>
        <h1>Todos eventos</h1>
      </Header>
      <TableContainer>
        <Table />
      </TableContainer>
    </Container>
  );
}
