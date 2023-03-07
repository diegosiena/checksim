import type { Checklist } from '../../../types/checklist.types';
import data from '$lib/data/index.json';

export const getTrendingChecklists = (index = 0, count = 4): Checklist[] => {
	return data.slice(index, count);
};
