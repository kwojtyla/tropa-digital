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
import { useState } from "react";
import { useRouter } from "next/navigation";
import { logoutAction } from "@/app/lib/auth-actions";

interface MenuProps {
  content: MenuSections[];
}

const Menu: React.FC<MenuProps> = ({ content }) => {
  const router = useRouter();
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleItemClick = (item: ItemMenu) => {
    router.push(item.path ?? "/");
    setSelectedItem(item.name);
  };

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
              <MenuItem
                key={item.name}
                $isSelected={selectedItem === item.name}
                onClick={() => handleItemClick(item)}
              >
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
        <MenuItem
          $isSelected={selectedItem === "profile"}
          onClick={() => console.log("Rota de Profile")}
        >
          <ProfileIcon />
          <p>Alterar dados</p>
        </MenuItem>
        <MenuItem
          $isSelected={selectedItem === "logout"}
          onClick={() => logoutAction()}
        >
          <LogoutIcon />
          <p>Sair</p>
        </MenuItem>
      </MenuFooter>
    </MenuContainer>
  );
};

export default Menu;
