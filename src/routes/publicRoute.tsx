import { Navigate } from "react-router-dom";
import React, { ReactNode, ReactElement } from "react";

const isAuthenticated = false;

const PublicRoute = ({ children }: { children: ReactNode }): ReactElement => {
  return isAuthenticated ? <Navigate to="/" /> : (children as ReactElement);
};

export default PublicRoute;
