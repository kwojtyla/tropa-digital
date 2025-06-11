import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`;

export const MainLayout = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
`;

export const DesktopSidebarContainer = styled.aside`
  display: flex;
  flex-shrink: 0;

  /* Oculta sidebar em mobile */
  @media (max-width: 767px) {
    display: none;
  }
`;

export const MainContent = styled.main`
  flex: 1;
  width: 100%;
  min-width: 0; /* Previne overflow em flex items */

  /* Em mobile, adiciona espaço para o header fixo */
  @media (max-width: 767px) {
    padding-top: 60px; /* Altura do header mobile */
  }
`;
