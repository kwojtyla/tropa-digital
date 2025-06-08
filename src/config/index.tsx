import { MenuSections } from "@/components/menu/types";
import {
  DashboardIcon,
  EventsIcon,
  TeamIcon,
  SubscriptionsIcon,
} from "@/assets/icons";

const createSiteConfig = () => {
  const menuSections: MenuSections = {
    title: "MENU",
    items: [
      { name: "Dashboard", icon: <DashboardIcon /> },
      { name: "Eventos", icon: <EventsIcon /> },
      { name: "Equipes", icon: <TeamIcon /> },
      {
        name: "Inscrições",
        icon: <SubscriptionsIcon />,
      },
    ],
  };

  return {
    name: "Agência Tropa Digital",
    url: "https://tropa.digital",
    description:
      "Criamos sites e experiências digitais que ajudam sua empresa a a se destacar no mundo online",
    ogImage: "https://tropa.digital/og.jpg",
    menuSections: menuSections,
  };
};

export const siteConfig = createSiteConfig();
