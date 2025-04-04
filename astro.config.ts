import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
	site: "https://kaneo.app",
	base: "/",
	vite: {
		plugins: [tailwindcss()],
	},
	integrations: [
		sitemap(),
		starlight({
			title: {
				en: "Kaneo",
				ko: "Kaneo",
			},
			tagline: "Project management made easy",
			logo: {
				src: "./src/assets/logo.svg",
				alt: "Kaneo's logo",
			},
			editLink: {
				baseUrl: "https://github.com/usekaneo/docs/tree/main",
			},
			customCss: ["./src/styles/global.css"],
			expressiveCode: {
				styleOverrides: {
					borderRadius: "0.2rem",
					frames: {
						editorActiveTabIndicatorHeight: "2px",
					},
				},
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
			social: {
				github: "https://github.com/usekaneo",
				"x.com": "https://x.com/usekaneo",
				discord: "https://discord.gg/rU4tSyhXXU",
			},
			components: {
				TableOfContents: "./src/components/starlight/toc.astro",
				Head: "./src/components/head.astro",
			},
			tableOfContents: {
				minHeadingLevel: 2,
				maxHeadingLevel: 4,
			},
			sidebar: [
				{
					label: "Getting Started",
					translations: {
						ko: "시작하기",
					},
					items: [
						{
							label: "Quick Start",
							translations: {
								ko: "빠른 시작",
							},
							link: "/quick-start/",
						},
					],
				},
				{
					label: "Core Concepts",
					translations: {
						ko: "핵심 개념",
					},
					autogenerate: {
						directory: "core-concepts",
					},
				},
			],
			defaultLocale: "root",
			locales: {
				'root': {
					label: "English",
					lang: "en",
				},
				ko: {
					label: "한국어",
					lang: "ko",
				},
			},
		}),
		mdx(),
	],
});
