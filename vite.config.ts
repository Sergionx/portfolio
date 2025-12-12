import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { devtools } from "@tanstack/devtools-vite";

import tailwindcss from "@tailwindcss/vite";
import { nitro } from 'nitro/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tsconfigPaths(),
    tanstackStart(),
    nitro(),
    viteReact(),
    devtools(),
    tailwindcss(),
  ],
});
