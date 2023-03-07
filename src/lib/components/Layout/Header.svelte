<script>
	import BetaVersion from './BetaVersion.svelte';
	import Nav from './Nav.svelte';
</script>

<header>
	<Nav />

	<BetaVersion />
</header>

<style lang="postcss">
	header {
		@apply w-screen overflow-hidden;
	}
</style>
