import { BrowserRouter, Route, Routes } from "react-router-dom";
import LazyLoader from "@utils/routesContainer";
import { lazy } from "react";
import PrivateRoute from "./privateRoute";
import PublicRoute from "./publicRoute";

const Login = LazyLoader(
    lazy(() => import("src/pages/Login"))
  );

  const Dashboard = LazyLoader(
    lazy(() => import("src/pages/Dashboard"))
  );

const RoutesManager = () => {
    
    return (<BrowserRouter>
        <Routes>
            <Route
                path={"/"}
                element={
                    <PrivateRoute>
                      <Dashboard/>
                    </PrivateRoute>
                }
            ></Route>
            <Route
                path={"/login"}
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