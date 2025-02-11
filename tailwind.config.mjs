/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			typography: {
				DEFAULT: {
					css: {
						"code::before": {
							content: '""',
						},
						"code::after": {
							content: '""',
						},
						"blockquote p:first-of-type::before": {
							content: '""',
						},
						"blockquote p::after": {
							content: '""',
						},
						pre: {
							background: "transparent",
							padding: 0,
							margin: 0,
						},
					},
				},
			},
		},
	},
};
