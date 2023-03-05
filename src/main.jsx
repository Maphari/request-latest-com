import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./sass/index.css";
import "./sass/main.scss";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./components/contex/authContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
