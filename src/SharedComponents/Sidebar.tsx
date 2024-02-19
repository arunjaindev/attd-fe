import { NavLink, Navigate } from "react-router-dom"
import { useAuthContext } from "../contexts/AuthState"
import { useState } from "react"
import { navRoutes } from "./constants"

export default function Sidebar() {
  const [isLoggedOut, setIsLoggedOut] = useState(false)
  const { user, logout } = useAuthContext()
  const role = user?.role

  const handleLogout = () => {
    logout()
    setIsLoggedOut(true)
  }

  if (isLoggedOut) {
    return <Navigate to="/" />
  }

  return (
    <div className="w-60 h-lvh fixed pt-20 bg-slate-200">
      {navRoutes.map(
        ({ path, label, role: allowedRole }) =>
          (!allowedRole || role === allowedRole) && (
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
        type="button"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  )
}
