import { Navigate } from "react-router-dom";

const isAuthenticated = true

const PublicRoute = ({ children }: any) => {
  return  isAuthenticated ? <Navigate to="/" /> : children;
};
export default PublicRoute;
