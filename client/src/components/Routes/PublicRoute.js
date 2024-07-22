import React from "react";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  if (localStorage.getItem("token")) {
    return <Navigate to="/" />;//inventory route
  } else {
    return children;
  }
};

export default PublicRoute;
//Your PublicRoute component is designed to conditionally render its children or redirect to the home page ("/") 
//based on the presence of a token in localStorage. 
//This is a common pattern for handling public routes that should not be accessible to authenticated users.