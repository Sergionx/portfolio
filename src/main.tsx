import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { HeroUIProvider, Spinner } from "@heroui/react";
import {
  createRouter,
  createRootRoute,
  createRoute,
  RouterProvider,
  redirect,
} from "@tanstack/react-router";
import MainLayout from "./layouts/MainLayout.tsx";

const App = lazy(() => import("./App.tsx"));

const rootRoute = createRootRoute({
  component: MainLayout,
});

const portfolioRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "portfolio",
  component: () => (
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
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  loader: () => {
    throw redirect({
      to: "/portfolio",
    });
  },
});

const catchAllRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "$",
  loader: () => {
    throw redirect({
      to: "/portfolio",
    });
  },
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  portfolioRoute,
  catchAllRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HeroUIProvider>
      <RouterProvider router={router} />
    </HeroUIProvider>
  </React.StrictMode>
);
