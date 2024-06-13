import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://ctseng07.github.io',
  base: '/SunbirdSpeechTherapy',
  integrations: [tailwind()]
});