import React from "react";
import { Navigate, Outlet } from "react-router-dom";

import UserContext from "../resources/context/UserContext";

const ProtectedRoute = () => {
  const { isAuthenticated } = React.useContext(UserContext);

  return isAuthenticated ? <Outlet /> : <Navigate to="/landing" />;
};

export default ProtectedRoute;
