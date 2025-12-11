import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { Spinner } from "@heroui/react";

const App = lazy(() => import("@/App"));

export const Route = createFileRoute("/$locale/")({
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
