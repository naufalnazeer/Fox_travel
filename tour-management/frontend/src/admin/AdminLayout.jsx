import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useAdminAuth } from "./AdminAuthContext";
import "./admin.css";

const navItems = [
  { to: "/admin/packages", label: "Tour Packages", icon: "ri-suitcase-3-line" },
  { to: "/admin/hotels", label: "Hotel Rooms", icon: "ri-hotel-line" },
  { to: "/admin/fleet", label: "Fleet (Buses & Mini Travellers)", icon: "ri-bus-2-line" },
  { to: "/admin/gallery", label: "Gallery", icon: "ri-image-2-line" },
];

const AdminLayout = () => {
  const { user, signOut } = useAdminAuth();

  return (
    <div className="admin__shell">
      <aside className="admin__sidebar">
        <div className="admin__sidebar-brand">
          <i className="ri-bus-2-fill"></i> TravelSolutions
          <span>Admin</span>
        </div>
        <nav className="admin__nav">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `admin__nav-link${isActive ? " active" : ""}`}
            >
              <i className={item.icon}></i> {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="admin__sidebar-footer">
          <div className="admin__user-email" title={user?.email}>
            {user?.email}
          </div>
          <button type="button" className="admin__btn admin__btn-outline" onClick={signOut}>
            Sign Out
          </button>
        </div>
      </aside>
      <main className="admin__content">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
