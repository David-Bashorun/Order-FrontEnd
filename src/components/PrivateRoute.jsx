import React from "react";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

function PrivateRoute({ children }) {
  const isAuthenticated = localStorage.getItem("token"); // or your auth logic

  return isAuthenticated ? children : <Navigate to="/signin" />;
}

export default PrivateRoute;
