<script>
	import Button from '../Button.svelte';
	import { Icon, XMark, Bars3 } from 'svelte-hero-icons';

	let mobileMenuOpen = false;
	const onClickMenuIcon = () => {
		mobileMenuOpen = !mobileMenuOpen;
	};
</script>

<nav>
	<div class="content">
		<a class="logo" href="/">
			<img src="/images/logo-blue.png" alt="Checksim logo" />
		</a>
		<button class="menu-icon" on:click={onClickMenuIcon}>
			<Icon src={mobileMenuOpen ? XMark : Bars3} size="32" class="text-black" />
		</button>
	</div>

	<div class="lg:ml-auto  lg:my-0 lg:border-t-0 {mobileMenuOpen ? 'mt-4 mb-2 border-t' : ''}" />

	<div class="links {mobileMenuOpen ? 'active' : ''}">
		<Button label="Home" variant="link" href="/" />
		<Button label="Explore" variant="link" href="/explore" />
		<Button label="About" variant="link" href="/about" />
	</div>

	<div class="lg:mr-auto  lg:my-0 lg:border-t-0 {mobileMenuOpen ? 'my-2 border-t' : ''}" />

	<div class="links {mobileMenuOpen ? 'active' : ''}">
		<Button label="Login" variant="link" href="/login" />
		<div class="mr-2" />
		<Button label="Sign up" variant="primary" href="/signup" />
	</div>
</nav>

<style lang="postcss">
	nav {
		@apply container flex flex-col flex-nowrap py-4;

		@screen lg {
			@apply flex-row;
		}

		& .content {
			@apply flex justify-between;
		}

		& .logo {
			@apply min-w-fit;
		}

		& .links {
			@apply hidden flex-col gap-1;

			@screen lg {
				@apply flex flex-row mt-0 gap-0;
			}
		}

		& .links.active {
			@apply flex;
		}

		& .menu-icon {
			@screen lg {
				@apply hidden;
			}
		}

		img {
			@apply h-8;

			@screen lg {
				@apply h-10;
			}
		}
	}
</style>
