import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import SideMenu from "./components/layout/SideMenu.tsx";
import { NextUIProvider } from "@nextui-org/react";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/portfolio",
    element: (
      <>
        <SideMenu />
        <App />
      </>
    ),
  },
  {
    path: "*",
    element: <Navigate to="/portfolio" replace />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NextUIProvider>
      <RouterProvider router={router} />
    </NextUIProvider>
  </React.StrictMode>
);
