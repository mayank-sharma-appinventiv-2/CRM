import { Navigate } from "react-router-dom";

const isAuthenticated = true

const PrivateRoute = ({ children }: any) => {
  return isAuthenticated ? children : <Navigate to="/login" />
};
export default PrivateRoute;
