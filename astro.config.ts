import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

import expressiveCode from "astro-expressive-code";

export default defineConfig({
	vite: {
		plugins: [tailwindcss()],
	},
	integrations: [sitemap(), mdx()],
	site: "https://kaneo.app",
	base: "/",
});
