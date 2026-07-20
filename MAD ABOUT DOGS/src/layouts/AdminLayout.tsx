import { useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../components/admin/Sidebar";

import "./CSS/AdminLayout.css";

const AdminLayout = () => {
  const [collapsed, setCollapsed] =
    useState(false);

  return (
    <div className="admin-layout">
      <Sidebar
        collapsed={collapsed}
        setCollapsed={
          setCollapsed
        }
      />

      <main
        className={`admin-content ${
          collapsed
            ? "collapsed"
            : ""
        }`}
      >
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;