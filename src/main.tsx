import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { HeroUIProvider } from "@heroui/react";
import {
  createRouter,
  RouterProvider,
} from "@tanstack/react-router";
import "./i18n";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";

const router = createRouter({ routeTree, basepath: "/portfolio" });

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
