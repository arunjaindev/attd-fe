import { NavLink, Navigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthState";
import { useState } from "react";

export default function Sidebar() {
  const [out, setOut] = useState(false);
  const { user, logout } = useAuthContext();
  const role = user?.role;

  const handleLogout = () => {
    logout();
    setOut(true);
  };

  if (out) {
    return <Navigate to="/" />;
  }

  const routes = [
    { path: "/dashboard", label: "Dashboard" },
    { path: "/classAttendance", label: "Class Attendance", role: "teacher" },
    { path: "/userAttendance", label: "User Attendance", role: "principal" },
    { path: "/addUser", label: "Add User", role: "principal" },
  ];

  return (
    <div className="w-60 h-lvh fixed pt-20 bg-slate-200">
      {routes.map(
        ({ path, label, role: allowedRole }) =>
          (allowedRole === undefined || role === allowedRole) && (
            <NavLink
              key={path}
              to={path}
              className="font-semibold text-lg text-left block px-4 py-3 w-full hover:bg-slate-100"
            >
              {label}
            </NavLink>
          )
      )}
      <button
        className="font-semibold text-lg text-left block px-4 py-3 w-full hover:bg-slate-100"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}
