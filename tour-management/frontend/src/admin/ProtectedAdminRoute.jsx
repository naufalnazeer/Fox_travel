import React from "react";
import { Navigate } from "react-router-dom";
import { useAdminAuth } from "./AdminAuthContext";
import { isSupabaseConfigured } from "../lib/supabaseClient";

const ProtectedAdminRoute = ({ children }) => {
  const { session, isAdmin, loading } = useAdminAuth();

  if (!isSupabaseConfigured) {
    return <Navigate to="/admin/login" replace />;
  }

  if (loading) {
    return <div className="admin__loading">Loading…</div>;
  }

  if (!session || !isAdmin) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
};

export default ProtectedAdminRoute;
