import { getCollection } from "astro:content";
import { loadFonts } from "@/utils/fonts";
import type { APIRoute } from "astro";
import satori from "satori";
import sharp from "sharp";
import { createOGImage } from "../../utils/og-image";

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

	const svg = await satori(createOGImage({ title }), {
		width: 1200,
		height: 630,
		fonts: loadFonts(),
	});

	const png = await sharp(Buffer.from(svg)).png().toBuffer();

	return new Response(png, {
		headers: {
			"Content-Type": "image/png",
			"Cache-Control": "public, max-age=31536000, immutable",
		},
	});
};
