import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://hamzalekhbioui.github.io",
  integrations: [mdx()]
});