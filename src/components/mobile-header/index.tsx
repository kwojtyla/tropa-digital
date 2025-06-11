"use client";
import { LogoFullIcon } from "@/assets/icons";
import { useState } from "react";
import { MenuSections } from "../menu/types";
import {
  HeaderContainer,
  HeaderContent,
  BurgerButton,
  BurgerLine,
} from "./styles";
import MobileMenu from "../mobile-menu";

interface MobileHeaderProps {
  menuContent: MenuSections[];
}

const MobileHeader: React.FC<MobileHeaderProps> = ({ menuContent }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <HeaderContainer>
        <HeaderContent>
          <BurgerButton onClick={toggleMenu} $isOpen={isMenuOpen}>
            <BurgerLine />
            <BurgerLine />
            <BurgerLine />
          </BurgerButton>

          <LogoFullIcon />

          <div style={{ width: "24px" }} />
        </HeaderContent>
      </HeaderContainer>

      <MobileMenu
        content={menuContent}
        isOpen={isMenuOpen}
        onClose={closeMenu}
      />
    </>
  );
};

export default MobileHeader;
