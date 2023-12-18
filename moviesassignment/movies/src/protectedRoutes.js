import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./contexts/authContext";

const ProtectedRoute = ({children}) => {
  const { isAuthenticated } = useContext(AuthContext);

  return isAuthenticated === true ? (
    children
  ) : (
    <Navigate
      to={{
        pathname: "/login",
      }}
    />
  );
};

export default ProtectedRoute;