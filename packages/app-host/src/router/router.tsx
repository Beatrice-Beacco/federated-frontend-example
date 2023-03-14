import React from "react";
import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../App";
import Dashboard from "../views/Dashboard/index";
import Placeholder from "../views/Placeholder";
import { MenuItems } from "../typescript/enums/routing";
import CompanyPerformance from "../views/CompanyPerformance";

const ReportForm = React.lazy(() => import("remote_reports/ReportForm"));

export const appRoutes: RouteObject[] = [
  {
    index: true,
    element: <Dashboard />,
  },
  {
    path: MenuItems.COMPANY_PERFORMANCE,
    element: <CompanyPerformance />,
  },
  {
    path: "placeholder1",
    element: <Placeholder />,
  },
  {
    path: "placeholder2",
    element: <Placeholder />,
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
