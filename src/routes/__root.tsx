import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { TanStackDevtools } from "@tanstack/react-devtools";
import { HeroUIProvider } from "@heroui/react";

import i18n from "@/i18n";

import MainLayout from "@/layouts/MainLayout";

export const Route = createRootRoute({
  head: () => {
    // const origin = typeof window !== "undefined" ? window.location.origin : "";
    const url = typeof window !== "undefined" ? window.location.href : "";
    const title = i18n.t("meta.title");
    const description = i18n.t("meta.description");
    const ogImage = "https://sergionx.github.io/portfolio/og-home.png";

    return {
      meta: [
        { title },
        {
          name: "description",
          content: description,
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:title",
          content: title,
        },
        {
          property: "og:description",
          content: description,
        },
        {
          property: "og:image",
          content: ogImage,
        },
        {
          property: "og:url",
          content: url,
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:title",
          content: title,
        },
        {
          name: "twitter:description",
          content: description,
        },
        {
          name: "twitter:image",
          content: ogImage,
        },
        {
          name: "twitter:url",
          content: url,
        },
      ],
    };
  },
  component: () => (
    <html>
      <head>
        <HeadContent />
      </head>

      <body>
        <HeroUIProvider>
          <MainLayout />
        </HeroUIProvider>
        <Scripts />
      </body>

      <TanStackDevtools
        config={{ position: "bottom-right" }}
        plugins={[
          {
            name: "TanStack Router",
            render: <TanStackRouterDevtoolsPanel />,
            defaultOpen: false,
          },
        ]}
      />
    </html>
  ),
});
