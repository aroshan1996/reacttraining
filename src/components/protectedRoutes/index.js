import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const auth = localStorage.getItem("token");
  if (!auth) {
    return <Navigate to="/sign-up" replace />;
  }
  return children;
};

export default ProtectedRoutes;
