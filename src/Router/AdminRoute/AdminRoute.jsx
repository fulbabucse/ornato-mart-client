import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContexts } from "../../contexts/AuthProvider/AuthProvider";
import { useAdmin } from "../../hooks/useAdmin";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContexts);
  const location = useLocation();

  const [isAdmin, adminLoading] = useAdmin(user?.email);

  if (loading || adminLoading) {
    return (
      <div className="flex items-center justify-center space-x-2">
        <div
          className="spinner-grow inline-block w-12 h-12 bg-current rounded-full opacity-0"
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (user && isAdmin) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
