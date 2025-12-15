import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { devtools } from "@tanstack/devtools-vite";

import tailwindcss from "@tailwindcss/vite";
import netlify from "@netlify/vite-plugin-tanstack-start";

import { generateSitemap } from "tanstack-router-sitemap";
import { sitemap } from "./src/utils/sitemap";

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    tanstackStart(),
    viteReact(),
    devtools(),
    netlify(),
    generateSitemap(sitemap),
    tailwindcss(),
  ],
});
