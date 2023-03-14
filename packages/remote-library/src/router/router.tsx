import React from "react";
import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../App";
import PerformanceDashboard from "../views/PerformanceDashboard/index";
import { MenuItems } from "../typescript/enums/routing";

const ReportForm = React.lazy(() => import("remote_reports/ReportForm"));

export const appRoutes: RouteObject[] = [
  {
    index: true,
    element: <PerformanceDashboard />,
  },
  {
    path: MenuItems.REPORT_ISSUES,
    element: <ReportForm />,
  },
];

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: appRoutes,
  },
];

export const router = createBrowserRouter(routes);
