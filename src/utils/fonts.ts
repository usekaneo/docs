import { readFileSync } from "node:fs";
import { join } from "node:path";

export function loadFonts(): {
	name: string;
	data: Buffer;
	weight: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
	style: "normal" | "italic";
}[] {
	const firaSansRegular = readFileSync(
		join(process.cwd(), "public", "fonts", "FiraSans-Regular.ttf"),
	);

	return [
		{
			name: "Fira Sans",
			data: firaSansRegular,
			weight: 400,
			style: "normal",
		},
	];
}
