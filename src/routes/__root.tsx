import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { TanStackDevtools } from "@tanstack/react-devtools";
import { HeroUIProvider } from "@heroui/react";
import { useTranslation } from "react-i18next";

import i18n, { setSSRLanguage } from "@/i18n";
import indexCss from "@/index.css?url";

import SideMenu from "@/components/navigation/SideMenu";

export const Route = createRootRoute({
  head: () => {
    // const origin = typeof window !== "undefined" ? window.location.origin : "";
    const url = "https://sergionx.netlify.app/";
    const title = i18n.t("meta.title");
    const description = i18n.t("meta.description");
    const ogImage = "https://sergionx.github.io/portfolio/og-home.png";

    return {
      meta: [
        {
          charSet: "utf-8",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
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
      links: [{ rel: "stylesheet", href: indexCss }],
    };
  },
  beforeLoad: async () => {
    await setSSRLanguage();
  },
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  const { i18n } = useTranslation();

  return (
    <html lang={i18n.language}>
      <head>
        <HeadContent />
      </head>

      <body>
        <HeroUIProvider>
          <MainLayout>{children}</MainLayout>
        </HeroUIProvider>
        <Scripts />

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
      </body>
    </html>
  );
}

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <main
      className="flex flex-col items-center min-h-[200vh] px-8 lg:px-50 transition-colors duration-500
      text-foreground bg-background"
    >
      <SideMenu />

      {children}
    </main>
  );
}
