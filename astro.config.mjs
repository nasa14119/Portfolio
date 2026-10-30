import { defineConfig, fontProviders } from "astro/config";

import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

import autoAlias from "astro-auto-alias";

// https://astro.build/config
export default defineConfig({
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "es",
  },
  integrations: [react(), autoAlias()],
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Nunito Sans Variable",
      cssVariable: "--font-base",
      fallbacks: ["sans-serif"],
    },
  ],
});
