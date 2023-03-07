<script lang="ts">
	import '../app.css';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Layout/Header.svelte';
</script>

<Header />

<main>
	<slot />
</main>

<Footer />

<style lang="postcss">
	main {
		@apply w-screen overflow-hidden;
	}
</style>
