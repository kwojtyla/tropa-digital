import dynamic from "next/dynamic";

export const DashboardIcon = dynamic(() => import("./dashboard"));
export const EventsIcon = dynamic(() => import("./events"));
export const LogoFullIcon = dynamic(() => import("./logo-full"));
export const TeamIcon = dynamic(() => import("./team"));
export const SubscriptionsIcon = dynamic(() => import("./subscriptions"));
