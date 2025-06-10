import dynamic from "next/dynamic";

export const ActionsIcon = dynamic(() => import("./actions"));
export const DashboardIcon = dynamic(() => import("./dashboard"));
export const EventsIcon = dynamic(() => import("./events"));
export const LogoFullIcon = dynamic(() => import("./logo-full"));
export const TeamIcon = dynamic(() => import("./team"));
export const PlusIcon = dynamic(() => import("./plus"));
export const SubscriptionsIcon = dynamic(() => import("./subscriptions"));
