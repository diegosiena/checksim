import type { PageServerLoad } from './$types';
import { getTrendingChecklists } from '$lib/utils/checklists/get';

export const load = (async () => {
	const trendingChecklists = getTrendingChecklists(0, 4);

	return {
		trendingChecklists
	};
}) satisfies PageServerLoad;
