import { ReactNode } from "react";

export type MenuSections = {
  title: string;
  items: ItemMenu[];
};

export type ItemMenu = {
  name: string;
  icon: ReactNode;
  path?: string;
  disabled?: boolean;
  external?: boolean;
};
