import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://samsonc89.github.io",
  base: "/Sunbird",
  integrations: [tailwind()],
});
