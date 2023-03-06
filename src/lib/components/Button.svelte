<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let label: string;
	export let href = '';
	export let variant: 'primary' | 'secondary' | 'link' = 'primary';

	const onClick = () => {
		dispatch('onClick');
	};
</script>

<svelte:element this={href ? 'a' : 'div'} class="button {variant}" {href}>
	{label}
</svelte:element>

<style lang="postcss">
	.button {
		@apply cursor-pointer rounded-lg px-5 flex justify-center items-center text-base font-semibold font-serif;

		&.primary {
			@apply bg-blue-500 text-white;

			&:hover {
				@apply bg-blue-700;
			}
		}

		&.link {
			@apply bg-white text-slate-600;

			&:hover {
				@apply bg-slate-100;
			}
		}
	}
</style>
