import { NavLink, useNavigate } from "react-router-dom";

import {
  LayoutDashboard,
  CalendarDays,
  Package,
  ChevronLeft,
  ChevronRight,
  LogOut,
} from "lucide-react";

import { useAuth } from "../../context/AuthContext";

import "../CSS/Sidebar.css";

interface SidebarProps {
  collapsed: boolean;
  setCollapsed: React.Dispatch<
    React.SetStateAction<boolean>
  >;
}

const Sidebar = ({
  collapsed,
  setCollapsed,
}: SidebarProps) => {
  const navigate = useNavigate();

  const { logout } =
    useAuth();

  const handleLogout =
    async () => {
      await logout();

      navigate(
        "/admin/login",
        {
          replace: true,
        }
      );
    };

  return (
    <aside
      className={`sidebar ${
        collapsed
          ? "collapsed"
          : ""
      }`}
    >
      <div>
        <div className="sidebar-top">
          {!collapsed && (
            <h2 className="sidebar-logo">
              Mad About Dogs
            </h2>
          )}

          <button
            className="sidebar-toggle"
            onClick={() =>
              setCollapsed(
                !collapsed
              )
            }
          >
            {collapsed ? (
              <ChevronRight
                size={18}
              />
            ) : (
              <ChevronLeft
                size={18}
              />
            )}
          </button>
        </div>

        <nav>
  <NavLink
    to="/admin/dashboard"
  >
    <LayoutDashboard
      size={20}
    />

    {!collapsed && (
      <span>
        Dashboard
      </span>
    )}
  </NavLink>

  <NavLink
    to="/admin/appointments"
  >
    <CalendarDays
      size={20}
    />

    {!collapsed && (
      <span>
        Appointments
      </span>
    )}
  </NavLink>

  <NavLink
    to="/admin/products"
  >
    <Package
      size={20}
    />

    {!collapsed && (
      <span>
        Products
      </span>
    )}
  </NavLink>
</nav>
      </div>

<button
  className="sidebar-logout"
  onClick={handleLogout}
>
  <LogOut size={20} />

  {!collapsed && (
    <span>Logout</span>
  )}
</button>
    </aside>
  );
};

export default Sidebar;