import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { NextUIProvider, Spinner } from "@nextui-org/react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout.tsx";

const App = lazy(() => import("./App.tsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/portfolio",
        element: (
          <Suspense
            fallback={
              <Spinner
                className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                classNames={{
                  wrapper: "w-[40vw] h-[40vw] max-w-[200px] max-h-[200px]",
                }}
              />
            }
          >
            <App />
          </Suspense>
        ),
      },
    ],
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
