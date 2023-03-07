<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let label: string;
	export let href = '';
	export let variant: 'primary' | 'secondary' | 'link' = 'primary';
	export let size: 'base' | 'sm' | 'xs' | 'lg' | 'xl' = 'base';

	const onClick = () => {
		dispatch('click');
	};

	const onKeyPress = (event: KeyboardEvent) => {
		if (event.key === 'Enter') dispatch('onClick');
	};
</script>

<svelte:element
	this={href ? 'a' : 'button'}
	type={href ? null : 'button'}
	class="button {variant} {size}"
	href={href || null}
	on:click={onClick}
	on:keypress={onKeyPress}
>
	{label}
</svelte:element>

<style lang="postcss">
	.button {
		@apply cursor-pointer rounded-lg flex justify-center items-center text-base font-semibold font-serif focus:outline-none;

		&.xs {
			@apply px-3 py-2 text-xs;
		}
		&.sm {
			@apply px-3 py-2 text-sm;
		}
		&.base {
			@apply px-5 py-2.5;
		}
		&.lg {
			@apply px-5 py-3;
		}
		&.xl {
			@apply px-6 py-3.5;
		}

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

		&.secondary {
			@apply bg-white border border-primary text-primary;

			&:hover {
				@apply bg-slate-100;
			}
		}
	}
</style>
