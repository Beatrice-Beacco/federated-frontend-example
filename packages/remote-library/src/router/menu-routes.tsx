import { MenuItems } from "../typescript/enums/routing";

export interface MenuRoute {
  label: string;
  path: MenuItems;
}

export const menuRoutes: MenuRoute[] = [
  { label: "Company Performance", path: MenuItems.DASHBOARD },
  { label: "Report Issues", path: MenuItems.REPORT_ISSUES },
];
