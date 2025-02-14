import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

import starlight from "@astrojs/starlight";

export default defineConfig({
	vite: {
		plugins: [tailwindcss()],
	},
	integrations: [
		sitemap(),
		starlight({
			editLink: {
				baseUrl: "https://github.com/kaneo-app/landing-page/tree/main",
			},
			expressiveCode: {
				styleOverrides: {
					borderRadius: "0.2rem",
					frames: {
						editorActiveTabIndicatorHeight: "2px",
					},
				},
			},
			title: "Kaneo",
			social: {
				twitter: "https://twitter.com/kaneoapp",
				github: "https://github.com/kaneo-app",
				"x.com": "https://x.com/kaneoapp",
			},
			head: [
				{
					tag: "link",
					attrs: {
						rel: "apple-touch-icon",
						href: "/apple-touch-icon.png",
					},
				},
				{
					tag: "link",
					attrs: {
						rel: "icon",
						type: "image/png",
						sizes: "32x32",
						href: "/favicon-32x32.png",
					},
				},
				{
					tag: "link",
					attrs: {
						rel: "icon",
						type: "image/png",
						sizes: "16x16",
						href: "/favicon-16x16.png",
					},
				},
				{
					tag: "link",
					attrs: {
						rel: "mask-icon",
						href: "/safari-pinned-tab.svg",
						color: "#603cba",
					},
				},
			],
			customCss: ["./src/styles/global.css"],
			logo: {
				src: "./src/assets/logo.svg",
				alt: "Kaneo's logo",
			},
			tagline: "Project management made easy",
			components: {
				TableOfContents: "./src/components/starlight/toc.astro",
				Head: "./src/components/head.astro",
			},
			tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 4 },
			sidebar: [
				{
					label: "Getting Started",
					items: [{ label: "Quick Start", link: "/quick-start/" }],
				},
				{
					label: "Core Concepts",
					autogenerate: {
						directory: "core-concepts",
					},
				},
			],
		}),
		mdx(),
	],
	site: "https://kaneo.app",
	base: "/",
});
