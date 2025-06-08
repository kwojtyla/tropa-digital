"use client";
import { LogoFullIcon } from "@/assets/icons";
import UserPicture from "@/assets/images/user.webp";
import {
  Divider,
  MenuContainer,
  MenuContent,
  MenuFooter,
  MenuHeader,
  MenuItem,
  MenuSection,
  SectionTitle,
  UserContainer,
  UserImage,
  UserInfo,
  UserName,
  UserRole,
} from "./styles";
import { ItemMenu, MenuSections } from "./types";
import Image from "next/image";
import ProfileIcon from "@/assets/icons/profile";
import LogoutIcon from "@/assets/icons/logout";

interface MenuProps {
  content: MenuSections[];
}

const Menu: React.FC<MenuProps> = ({ content }) => {
  return (
    <MenuContainer>
      <MenuHeader>
        <LogoFullIcon />
      </MenuHeader>

      <MenuContent>
        {content.map((section) => (
          <MenuSection key={section.title}>
            <SectionTitle>{section.title}</SectionTitle>
            {section.items.map((item: ItemMenu) => (
              <MenuItem key={item.name}>
                {item.icon}
                <p>{item.name}</p>
              </MenuItem>
            ))}
          </MenuSection>
        ))}
      </MenuContent>

      <Divider />

      <MenuFooter>
        <UserContainer>
          <UserImage>
            <Image
              src={UserPicture}
              width={40}
              height={40}
              alt="Foto do usuário"
            />
          </UserImage>
          <UserInfo>
            <UserName>Kaique Steck</UserName>
            <UserRole>Administrador</UserRole>
          </UserInfo>
        </UserContainer>
        <MenuItem>
          <ProfileIcon />
          <p>Alterar dados</p>
        </MenuItem>
        <MenuItem>
          <LogoutIcon />
          <p>Sair</p>
        </MenuItem>
      </MenuFooter>
    </MenuContainer>
  );
};

export default Menu;
