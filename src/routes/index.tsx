import { BrowserRouter, Route, Routes } from "react-router-dom";
import LazyLoader from "src/utils/routesContainer";
import { lazy } from "react";
import PrivateRoute from "./privateRoute";
import PublicRoute from "./publicRoute";
import ROUTES from "./routesPaths";
import React from "react";

const Login = LazyLoader(lazy(() => import("src/pages/Login")));

const Dashboard = LazyLoader(lazy(() => import("src/pages/Dashboard")));

const routesConfig = [
  {
    path: ROUTES.DASHBAORD,
    isPrivate: true,
    component: Dashboard,
  },
  {
    path: ROUTES.LOGIN,
    isPrivate: false,
    component: Login,
  },
];

interface RouteConfig {
  path: string;
  isPrivate: boolean;
  component: React.ComponentType;
}

const RoutesManager = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routesConfig.map((item: RouteConfig) => {
          const AccessWrapper = item.isPrivate ? PrivateRoute : PublicRoute;
          const Component = item.component;
          return (
            <Route
              key={item.path}
              path={item.path}
              element={
                <AccessWrapper>
                  <Component />
                </AccessWrapper>
              }
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesManager;
