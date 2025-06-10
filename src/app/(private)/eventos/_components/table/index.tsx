import { useMemo, useState } from "react";
import {
  Container,
  EmptyIcon,
  EmptyState,
  EmptyText,
  SearchContainer,
  MainTable,
  TableCell,
  TableContainer,
  TableHeader,
  TableHeaderCell,
  TableRow,
  Title,
  StatusDot,
  StatusCell,
  Pagination,
} from "./styles";
import { ActionsIcon, PlusIcon } from "@/assets/icons";
import Button from "@/components/button";
import SearchInput from "../search-input";

const mockEventos = [
  {
    id: 1,
    name: "Clube do Laço Coração Pantaneiro",
    total_teams: 10,
    status: "Ativo",
    date: "09 a 11 de Junho",
  },
  {
    id: 2,
    name: "Clube do Laço Coração Pantaneiro",
    total_teams: 10,
    status: "Inativo",
    date: "09 a 11 de Junho",
  },
];

const Table = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEventos = useMemo(() => {
    if (!searchTerm.trim()) {
      return mockEventos;
    }

    const term = searchTerm.toLowerCase();
    return mockEventos.filter(
      (evento) =>
        evento.name.toLowerCase().includes(term) ||
        evento.status.toLowerCase().includes(term)
    );
  }, [searchTerm]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <Container>
      <SearchContainer>
        <SearchInput
          placeholder="Buscar eventos"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <Button onClick={() => console.log("Inserir novo")}>
          <PlusIcon />
          Inserir novo
        </Button>
      </SearchContainer>

      <TableContainer>
        {filteredEventos.length > 0 ? (
          <MainTable>
            <TableHeader>
              <TableRow>
                <TableHeaderCell>Nome do Evento</TableHeaderCell>
                <TableHeaderCell>Total de equipes</TableHeaderCell>
                <TableHeaderCell>Status</TableHeaderCell>
                <TableHeaderCell>Data</TableHeaderCell>
                <TableHeaderCell></TableHeaderCell>
              </TableRow>
            </TableHeader>
            <tbody>
              {filteredEventos.map((evento) => (
                <TableRow key={evento.id}>
                  <TableCell>{evento.name}</TableCell>
                  <TableCell>{evento.total_teams}</TableCell>
                  <TableCell>
                    <StatusCell>
                      <StatusDot $status={evento.status} />
                      {evento.status}
                    </StatusCell>
                  </TableCell>
                  <TableCell>{evento.date}</TableCell>
                  <TableCell>
                    <ActionsIcon color="#cc6237" />
                  </TableCell>
                </TableRow>
              ))}
            </tbody>
          </MainTable>
        ) : (
          <EmptyState>
            <EmptyIcon>🔍</EmptyIcon>
            <EmptyText>Nenhum evento encontrado para "{searchTerm}"</EmptyText>
          </EmptyState>
        )}
      </TableContainer>
      <Pagination>
        <Button
          variant="secondary"
          onClick={() => console.log("Página anterior")}
        >
          Anterior
        </Button>
        <Button
          variant="primary"
          size="single"
          onClick={() => console.log("Página 1")}
        >
          1
        </Button>
        <Button
          variant="secondary"
          size="single"
          onClick={() => console.log("Página 2")}
        >
          2
        </Button>
        <Button
          variant="secondary"
          size="single"
          onClick={() => console.log("Página 3")}
        >
          3
        </Button>
        <Button variant="primary" onClick={() => console.log("Próxima página")}>
          Próxima
        </Button>
      </Pagination>
    </Container>
  );
};

export default Table;
