import styled from "styled-components";

interface BurgerButtonProps {
  $isOpen?: boolean;
}

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 999;
  display: none;

  @media (max-width: 767px) {
    display: block;
  }
`;

export const HeaderContent = styled.div`
  height: 100%;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 100%;
`;

export const BurgerButton = styled.button<BurgerButtonProps>`
  background: none;
  border: none;
  width: 24px;
  height: 24px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0;

  span:nth-child(1) {
    transform: ${({ $isOpen }) =>
      $isOpen ? "rotate(45deg) translate(5px, 5px)" : "rotate(0)"};
  }

  span:nth-child(2) {
    opacity: ${({ $isOpen }) => ($isOpen ? "0" : "1")};
  }

  span:nth-child(3) {
    transform: ${({ $isOpen }) =>
      $isOpen ? "rotate(-45deg) translate(7px, -6px)" : "rotate(0)"};
  }
`;

export const BurgerLine = styled.span`
  width: 24px;
  height: 2px;
  background-color: #cc6237;
  transition: all 0.3s ease;
  transform-origin: 1px;
`;
