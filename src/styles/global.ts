import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Roboto, sans-serif;
    background-color: #F8F8F8;
    color: ${({ theme }) => theme.colors.text};
    display: flex;
    height: 100vh;
  }
`;
