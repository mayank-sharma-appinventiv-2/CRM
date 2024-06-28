import { BrowserRouter, Route, Routes } from "react-router-dom";
import LazyLoader from '@utils/routesContainer'
import { lazy } from "react";
import PrivateRoute from "./privateRoute";
import PublicRoute from "./publicRoute";
import ROUTES from "./routesPaths";

const Login = LazyLoader(
    lazy(() => import("@pages/Login"))
  );

  const Dashboard = LazyLoader(
    lazy(() => import("@pages/Dashboard"))
  );

const RoutesManager = () => {
    
    return (<BrowserRouter>
        <Routes>
            <Route
                path={ROUTES.DASHBAORD}
                element={
                    <PrivateRoute>
                      <Dashboard/>
                    </PrivateRoute>
                }
            ></Route>
            <Route
                path={ROUTES.LOGIN}
                element={
                    <PublicRoute>
                    <Login/>
                    </PublicRoute>
                }
            ></Route>
        </Routes>
    </BrowserRouter>)
}

export default RoutesManager