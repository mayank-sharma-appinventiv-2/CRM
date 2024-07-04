import { Navigate } from "react-router-dom";
import React, { ReactNode } from "react";

const isAuthenticated = true;

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
};

export default PrivateRoute;
