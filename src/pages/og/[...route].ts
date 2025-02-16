import { getCollection } from "astro:content";
import type { APIRoute } from "astro";
import satori from "satori";
import sharp from "sharp";
import { createOGImage } from "../../utils/og-image";

const fetchFont = async () => {
	const response = await fetch(
		"https://api.fontsource.org/v1/fonts/noto-sans/latin-400-normal.ttf",
	);
	return await response.arrayBuffer();
};

export async function getStaticPaths() {
	const docs = await getCollection("docs");

	return docs.map((doc) => {
		return {
			params: {
				route: doc.data.title.toLowerCase().replace(/ /g, "-"),
			},
		};
	});
}

export const GET: APIRoute = async ({ params }) => {
	const { route } = params;
	const title = route?.replace(/-/g, " ") || "Documentation";

	const notoSans = await fetchFont();

	const svg = await satori(createOGImage({ title }), {
		width: 1200,
		height: 630,
		fonts: [
			{
				name: "Noto Sans",
				data: notoSans,
				weight: 400,
				style: "normal",
			},
		],
	});

	const png = await sharp(Buffer.from(svg)).png().toBuffer();

	return new Response(png, {
		headers: {
			"Content-Type": "image/png",
			"Cache-Control": "public, max-age=31536000, immutable",
		},
	});
};
