import styled from "styled-components";

interface MenuItemProps {
  $isSelected?: boolean;
}

export const MenuContainer = styled.nav`
  max-width: 210px;
  height: 100%;
  width: 100%;
  background: white;
  display: flex;
  flex-direction: column;
  padding: 30px 24px;
`;

export const MenuHeader = styled.div`
  width: 100%;
`;

export const MenuContent = styled.ul`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-top: 30px;
`;

export const MenuSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SectionTitle = styled.span`
  font-size: 10px;
  font-weight: 700;
  color: #a3a3a3;
`;

export const MenuItem = styled.li<MenuItemProps>`
  padding: 10px;
  width: 100%;
  display: flex;
  border-radius: 5px;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: all 0.2s ease;

  background-color: ${({ $isSelected }) =>
    $isSelected ? "#cc6237" : "transparent"};
  color: ${({ $isSelected }) => ($isSelected ? "white" : "#252525")};

  p {
    font-size: 14px;
    font-weight: 500;
  }

  &:hover {
    background-color: ${({ $isSelected }) =>
      $isSelected ? "#cc6237" : "rgba(0, 0, 0, 0.05)"};
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e6e6e6;
  margin: 8px 0;
`;

export const MenuFooter = styled.div`
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const UserImage = styled.div`
  border: 1px solid #cc6237;
  border-radius: 15px;
  display: flex;

  img {
    border: 2px solid white;
    border-radius: 15px;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const UserName = styled.p`
  font-weight: 500;
  font-size: 14px;
  color: black;
`;

export const UserRole = styled.p`
  font-size: 11px;
  color: #7f7f7f;
`;
