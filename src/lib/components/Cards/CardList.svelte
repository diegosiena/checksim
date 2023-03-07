<script>
</script>

<div class="card-list">
	<slot />
</div>

<style lang="postcss">
	.card-list {
		@apply grid grid-cols-1 gap-8;

		@screen lg {
			@apply grid-cols-4 gap-8;
		}
	}
</style>
