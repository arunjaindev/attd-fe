import React, { useState, useMemo, createContext, useContext } from "react"
import { CredType, User, AuthContextType} from "./types"
import { URL } from "./constants"

export const AuthContext = createContext<AuthContextType | null>(null)

const AuthState = (props: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(
    JSON.parse(localStorage.getItem("user") ?? '""')
  )

  async function login(creds: CredType) {
    try {
      const response = await fetch(URL, {
        method: "POST",
        body: JSON.stringify(creds),
        credentials: "include",
      })

      if (!response.ok) {
        throw new Error("Login failed")
      }

      const data = await response.json()
      localStorage.setItem("user", JSON.stringify(data))
      setUser(data)
    } catch (error) {
      setUser(null)
    }
  }

  function logout() {
    localStorage.removeItem("user")
    setUser(null)
  }

  // Wrap provider value in useMemo to avoid unnecessary re-renders
  const value = useMemo(() => ({ user, login, logout }), [user])
  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  )
}

export const useAuthContext = () => {
  const value = useContext(AuthContext)
  if (!value) {
    throw new Error("Wrap with provider")
  }
  return value
}

export default AuthState
