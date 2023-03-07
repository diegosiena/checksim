<script lang="ts">
	import { Icon, QueueList, ListBullet } from 'svelte-hero-icons';

	export let manufacturer: string;
	export let type: string;
	export let label: string;
	export let imageUrl: string;
	export let slug: string;
</script>

<a class="aircraft-card" href="/checklist/{slug}">
	<img src={imageUrl} alt="" />
	<div class="card-info">
		<p>{manufacturer} {type}</p>
		<h5 class="">{label}</h5>
		<div class="card-details">
			<div class="card-details-item">
				<Icon src={QueueList} size="20" /> 5 sections
			</div>
			<div class="card-details-item">
				<Icon src={ListBullet} size="20" /> 20 items
			</div>
		</div>
	</div>
</a>

<style lang="postcss">
	.aircraft-card {
		@apply border border-gray-200 rounded-lg flex flex-col cursor-pointer;

		&:hover {
			@apply shadow bg-gray-50;
		}

		& img {
			@apply w-full rounded-t-lg h-48 object-cover;
		}

		& .card-info {
			@apply flex flex-col px-4 py-4;

			& h5 {
				@apply text-2xl font-semibold  text-black;
			}

			& p {
				@apply text-sm font-medium font-serif text-gray-500 mb-1;
			}
		}

		& .card-details {
			@apply flex flex-row flex-nowrap mt-4 justify-between;
		}

		& .card-details-item {
			@apply flex flex-row flex-nowrap items-center gap-1 text-gray-500;
		}
	}
</style>
