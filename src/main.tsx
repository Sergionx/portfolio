import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Header from "./components/layout/Header.tsx";
import SideMenu from "./components/layout/SideMenu.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SideMenu />
    <App />
  </React.StrictMode>
);
