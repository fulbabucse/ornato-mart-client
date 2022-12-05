import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../../Components/Spinner";
import { AuthContexts } from "../../contexts/AuthProvider/AuthProvider";
import { useAdmin } from "../../hooks/useAdmin";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContexts);
  const location = useLocation();

  const [isAdmin, adminLoading] = useAdmin(user?.email);

  if (loading || adminLoading) {
    return <Spinner />;
  }

  if (user && isAdmin) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
