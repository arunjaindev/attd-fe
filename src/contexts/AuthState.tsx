import { useState, useMemo } from "react";
import AuthContext from "./AuthContext";

const AuthState = (props) => {
  const [user, setUser] = useState({});

  async function login(creds) {
    try {
      const response = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(creds),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = response.json();
      setUser(data);
    } catch (error) {
      console.log("Login error:", error);
      setUser({});
    }
  }

  function logout() {
    setUser({});
  }

  // Wrap provider value in useMemo to avoid unnecessary re-renders
  const value = useMemo(() => ({ user, login, logout }), [user]);

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};

export default AuthState;
