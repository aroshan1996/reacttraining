import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedERoutes = ({children}) => {
    const auth = localStorage.getItem('token');
    if(!auth){
      return   <Navigate to="/signup" replace/>
    }
    return children
}

export default ProtectedERoutes