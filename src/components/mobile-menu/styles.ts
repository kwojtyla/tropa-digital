import styled from "styled-components";

interface MobileMenuItemProps {
  $isSelected?: boolean;
}

export const MobileMenuOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  justify-content: flex-start;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const MobileMenuContainer = styled.nav`
  width: 280px;
  max-width: 85vw;
  height: 100vh;
  background: white;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
  animation: slideIn 0.3s ease-out;

  @keyframes slideIn {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }
`;

export const MobileMenuHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  color: #666;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

export const MobileMenuContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: auto;
`;

export const MobileMenuSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 24px;
`;

export const MobileSectionTitle = styled.span`
  font-size: 11px;
  font-weight: 700;
  color: #a3a3a3;
  text-transform: uppercase;
  margin-bottom: 4px;
`;

export const MobileMenuItem = styled.div<MobileMenuItemProps>`
  padding: 12px 16px;
  width: 100%;
  display: flex;
  border-radius: 8px;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  min-height: 48px; /* Melhor para touch */

  background-color: ${({ $isSelected }) =>
    $isSelected ? "#cc6237" : "transparent"};
  color: ${({ $isSelected }) => ($isSelected ? "white" : "#252525")};

  p {
    font-size: 16px;
    font-weight: 500;
    margin: 0;
  }

  svg {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
  }

  &:hover {
    background-color: ${({ $isSelected }) =>
      $isSelected ? "#cc6237" : "rgba(0, 0, 0, 0.05)"};
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const MobileDivider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e6e6e6;
  margin: 16px 0;
`;

export const MobileMenuFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const MobileUserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  border-radius: 12px;
`;

export const MobileUserImage = styled.div`
  border: 2px solid #cc6237;
  border-radius: 20px;
  display: flex;

  img {
    border: 2px solid white;
    border-radius: 18px;
  }
`;

export const MobileUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
`;

export const MobileUserName = styled.p`
  font-weight: 600;
  font-size: 16px;
  color: black;
  margin: 0;
`;

export const MobileUserRole = styled.p`
  font-size: 12px;
  color: #7f7f7f;
  margin: 0;
`;
