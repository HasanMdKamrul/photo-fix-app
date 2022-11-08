import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className="flex justify-center items-center my-24">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-violet-400"></div>
      </div>
    );
  }

  if (user && user.uid) {
    return children;
  }
  return <Navigate to="/signin" state={{ from: location }} replace />;
};

export default PrivateRoute;
