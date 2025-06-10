"use client";

import { ArrowLeftIcon } from "lucide-react";
import styled from "styled-components";

const Container = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Message = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 100px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 16px;
  }

  p {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;

const HomeButton = styled.a`
  border-radius: 100px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  transition: all 0.2s ease;
  margin-top: 16px;
  text-decoration: none;

  &:hover {
    background-color: #a0522d;
  }
`;

export default function NotFound() {
  return (
    <Container>
      <Message>
        <h1>Oooops!</h1>
        <p>A página que você procura não existe.</p>
        <p>Pode haver um erro na URL ou a página foi removida.</p>
        <HomeButton href="/dashboard">
          <ArrowLeftIcon />
          Voltar à página inicial
        </HomeButton>
      </Message>
    </Container>
  );
}
