"use client";
import { LogoFullIcon } from "@/assets/icons";
import UserPicture from "@/assets/images/user.webp";
import Image from "next/image";
import ProfileIcon from "@/assets/icons/profile";
import LogoutIcon from "@/assets/icons/logout";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { logoutAction } from "@/app/lib/auth-actions";

import {
  MobileMenuOverlay,
  MobileMenuContainer,
  CloseButton,
  MobileMenuHeader,
  MobileMenuContent,
  MobileMenuSection,
  MobileSectionTitle,
  MobileMenuItem,
  MobileDivider,
  MobileMenuFooter,
  MobileUserContainer,
  MobileUserImage,
  MobileUserInfo,
  MobileUserName,
  MobileUserRole,
} from "./styles";
import { ItemMenu, MenuSections } from "../menu/types";

interface MobileMenuProps {
  content: MenuSections[];
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  content,
  isOpen,
  onClose,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  useEffect(() => {
    if (pathname.includes("eventos")) setSelectedItem("Eventos");
    else if (pathname.includes("dashboard")) setSelectedItem("Dashboard");
    else if (pathname.includes("equipes")) setSelectedItem("Equipes");
    else if (pathname.includes("inscricoes")) setSelectedItem("Inscrições");
  }, [pathname]);

  const handleItemClick = (item: ItemMenu) => {
    router.push(item.path ?? "/");
    setSelectedItem(item.name);
    onClose();
  };

  const handleProfileClick = () => {
    console.log("Rota de Profile");
    onClose();
  };

  const handleLogoutClick = () => {
    logoutAction();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <MobileMenuOverlay onClick={onClose}>
      <MobileMenuContainer onClick={(e) => e.stopPropagation()}>
        <MobileMenuHeader>
          <LogoFullIcon />
          <CloseButton onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M18 6L6 18M6 6l12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </CloseButton>
        </MobileMenuHeader>

        <MobileMenuContent>
          {content.map((section) => (
            <MobileMenuSection key={section.title}>
              <MobileSectionTitle>{section.title}</MobileSectionTitle>
              {section.items.map((item: ItemMenu) => (
                <MobileMenuItem
                  key={item.name}
                  $isSelected={selectedItem === item.name}
                  onClick={() => handleItemClick(item)}
                >
                  {item.icon}
                  <p>{item.name}</p>
                </MobileMenuItem>
              ))}
            </MobileMenuSection>
          ))}
        </MobileMenuContent>

        <MobileDivider />

        <MobileMenuFooter>
          <MobileUserContainer>
            <MobileUserImage>
              <Image
                src={UserPicture}
                width={50}
                height={50}
                alt="Foto do usuário"
              />
            </MobileUserImage>
            <MobileUserInfo>
              <MobileUserName>Kaique Steck</MobileUserName>
              <MobileUserRole>Administrador</MobileUserRole>
            </MobileUserInfo>
          </MobileUserContainer>

          <MobileMenuItem
            $isSelected={selectedItem === "profile"}
            onClick={handleProfileClick}
          >
            <ProfileIcon />
            <p>Alterar dados</p>
          </MobileMenuItem>

          <MobileMenuItem
            $isSelected={selectedItem === "logout"}
            onClick={handleLogoutClick}
          >
            <LogoutIcon />
            <p>Sair</p>
          </MobileMenuItem>
        </MobileMenuFooter>
      </MobileMenuContainer>
    </MobileMenuOverlay>
  );
};

export default MobileMenu;
