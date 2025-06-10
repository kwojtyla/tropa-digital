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
      { name: "Dashboard", icon: <DashboardIcon />, path: "/dashboard" },
      { name: "Eventos", icon: <EventsIcon />, path: "/eventos" },
      { name: "Equipes", icon: <TeamIcon />, path: "/equipes" },
      {
        name: "Inscrições",
        icon: <SubscriptionsIcon />,
        path: "/inscricoes",
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
