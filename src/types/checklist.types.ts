export type Checklist = {
	slug: string;
	label: string;
	aircraft: {
		infoUrl: string;
		imageUrl: string;
		manufacturer: string;
		type: string;
		model: string;
		family: string;
		engineType: string;
		icaoCode: string;
		iataCode: string;
	};
	checklist: {
		sections: {
			label: string;
			items: {
				label: string;
				value: string;
			}[];
		}[];
	};
};
