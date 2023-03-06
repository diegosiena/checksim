<script lang="ts">
	import '../app.css';
	import logo from '$lib/assets/images/logo-blue.png';
	import Button from '$lib/components/Button.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<header>
	<nav>
		<a href="/">
			<img src={logo} alt="Checksim logo" />
		</a>

		<div class="ml-auto" />

		<Button label="Home" variant="link" href="/" />
		<Button label="Explore" variant="link" href="/explore" />
		<Button label="About" variant="link" href="/about" />

		<div class="mr-auto" />

		<Button label="Login" variant="link" href="/login" />
		<div class="mr-2" />
		<Button label="Sign up" variant="primary" href="/signup" />
	</nav>
</header>

<slot />

<Footer />

<style lang="postcss">
	header {
		@apply border-b border-gray-200;

		nav {
			@apply container flex flex-row flex-nowrap py-4;

			img {
				@apply h-10;
			}
		}
	}
</style>
