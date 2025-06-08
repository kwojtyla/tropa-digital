"use client";

import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  background: #f9fbff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginContainer = styled.div`
  padding: 10px;
  border-radius: 20px;
  background: white;
  box-shadow: 0px 100px 200px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  justify-content: space-between;
`;

export const FormContainer = styled.div`
  padding: 20px 40px;
  gap: 2rem;
  display: flex;
  max-width: 340px;
  flex-direction: column;
`;

export const FormHeader = styled.div``;

export const FormTitle = styled.h1`
  font-weight: bold;
  font-size: 26px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const FormSubtitle = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const FormContent = styled.div``;
