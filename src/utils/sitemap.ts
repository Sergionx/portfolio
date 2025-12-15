import type { FileRouteTypes } from "@/routeTree.gen";
import type { Sitemap } from "tanstack-router-sitemap";

export type TRoutes = FileRouteTypes["fullPaths"];

// TODO - .env frontendURL
export const sitemap: Sitemap<TRoutes> = {
  siteUrl: "https://sergionx.netlify.app",
  defaultPriority: 0.5,
  defaultChangeFreq: "monthly",
  routes: {
    // Dynamic locale route: expand to concrete entries for en and es
    "/$locale": async () => {
      const locales = ["en", "es"] as const;
      return locales.map((locale) => ({
        path: `/${locale}`,
        priority: 0.8,
        changeFrequency: "monthly",
      }));
    },

    // If you add locale-specific subroutes, list them similarly, e.g.:
    // If you add locale-specific subroutes, list them similarly, e.g.:
    // "/$locale/projects": async () => {
    //   const locales = ["en", "es"] as const;
    //   return locales.map((locale) => ({
    //     path: `/${locale}/projects`,
    //     priority: 0.7,
    //     changeFrequency: "weekly",
    //   }));
    // },
  },
};
