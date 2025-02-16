import type { APIRoute } from "astro";

interface GitHubStats {
	stars: number;
	forks: number;
	contributors: number;
	lastUpdated: number;
}

let cachedStats: GitHubStats | null = null;
const CACHE_DURATION = 24 * 60 * 60 * 1000;

async function fetchGitHubStats(): Promise<GitHubStats> {
	const [repoData, contributors] = await Promise.all([
		fetch("https://api.github.com/repos/kaneo-app/app"),
		fetch("https://api.github.com/repos/kaneo-app/app/contributors"),
	]);

	const repo = await repoData.json();
	const contributorsList = await contributors.json();

	return {
		stars: repo.stargazers_count,
		forks: repo.forks_count,
		contributors: contributorsList.length,
		lastUpdated: Date.now(),
	};
}

export const GET: APIRoute = async () => {
	try {
		if (cachedStats && Date.now() - cachedStats.lastUpdated < CACHE_DURATION) {
			return new Response(JSON.stringify(cachedStats));
		}

		cachedStats = await fetchGitHubStats();
		return new Response(JSON.stringify(cachedStats));
	} catch (error) {
		return new Response(
			JSON.stringify({ error: "Failed to fetch GitHub stats" }),
			{ status: 500 },
		);
	}
};
