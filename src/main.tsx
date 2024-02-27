import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import AuthState from "./contexts/AuthState"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
      <AuthState>
        <App />
      </AuthState>
  </React.StrictMode>
)
