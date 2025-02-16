import { readFileSync } from "node:fs";
import { join } from "node:path";

export function loadFonts(): {
	name: string;
	data: Buffer;
	weight: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
	style: "normal" | "italic";
}[] {
	const inter = readFileSync(
		join(process.cwd(), "public", "fonts", "Inter-Regular.ttf"),
	);

	return [
		{
			name: "Inter",
			data: inter,
			weight: 400,
			style: "normal",
		},
	];
}
