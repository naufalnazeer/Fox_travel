import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AdminAuthProvider } from "./AdminAuthContext";
import ProtectedAdminRoute from "./ProtectedAdminRoute";
import AdminLogin from "./AdminLogin";
import AcceptInvite from "./AcceptInvite";
import AdminLayout from "./AdminLayout";
import EntityListPage from "./EntityListPage";
import EntityFormPage from "./EntityFormPage";
import { packagesConfig, hotelsConfig, fleetConfig, galleryConfig } from "./entityConfigs";

const entitySection = (config) => (
  <>
    <Route index element={<EntityListPage config={config} />} />
    <Route path=":id" element={<EntityFormPage config={config} />} />
  </>
);

const AdminRoutes = () => {
  return (
    <AdminAuthProvider>
      <Routes>
        <Route path="login" element={<AdminLogin />} />
        <Route path="accept-invite" element={<AcceptInvite />} />
        <Route
          element={
            <ProtectedAdminRoute>
              <AdminLayout />
            </ProtectedAdminRoute>
          }
        >
          <Route index element={<Navigate to="packages" replace />} />
          <Route path="packages">{entitySection(packagesConfig)}</Route>
          <Route path="hotels">{entitySection(hotelsConfig)}</Route>
          <Route path="fleet">{entitySection(fleetConfig)}</Route>
          <Route path="gallery">{entitySection(galleryConfig)}</Route>
        </Route>
      </Routes>
    </AdminAuthProvider>
  );
};

export default AdminRoutes;
