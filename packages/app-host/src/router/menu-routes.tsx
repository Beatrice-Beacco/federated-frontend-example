import { MenuItems } from "../typescript/enums/routing";

export interface MenuRoute {
  label: string;
  path: MenuItems | string; //TODO: remove string when all routes are added
}

export const menuRoutes: MenuRoute[] = [
  { label: "Dashboard", path: MenuItems.DASHBOARD },
  { label: "Company Performance", path: MenuItems.COMPANY_PERFORMANCE },
  { label: "Placeholder1", path: "/placeholder1" },
  { label: "Placeholder2", path: "/placeholder2" },
  { label: "Report Issues", path: MenuItems.REPORT_ISSUES },
];
