import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { LoaderProvider } from "./contexts/LoaderState";
import AuthState from "./contexts/AuthState";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LoaderProvider>
      <AuthState>
        <App />
      </AuthState>
    </LoaderProvider>
  </React.StrictMode>
);
