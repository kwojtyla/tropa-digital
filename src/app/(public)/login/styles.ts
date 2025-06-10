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
  min-height: 500px;
  min-width: 755px;
  background: white;
  box-shadow: 0px 100px 200px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  gap: 2.5rem;
  justify-content: space-between;

  @media (max-width: 768px) {
    min-width: auto;
    min-height: auto;
  }
`;

export const FormContainer = styled.div`
  padding: 40px 20px;
  width: 100%;
  gap: 2rem;
  display: flex;
  max-width: 340px;
  flex-direction: column;
`;

export const LogoContainer = styled.div`
  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const FormHeader = styled.div``;

export const FormTitle = styled.h1`
  font-weight: bold;
  font-size: 26px;
  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const FormSubtitle = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const FormContent = styled.div``;

export const ImageContainer = styled.div`
  max-width: 355px;
  width: 100%;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.primary};
  position: relative;

  img {
    position: absolute;
    bottom: 0;
    left: -50px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
