import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

export default defineConfig({
	integrations: [
		tailwind({
			applyBaseStyles: false,
		}),
	],
	site: "https://kaneo.app",
	base: "/",
});
