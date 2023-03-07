<script lang="ts">
	import Button from '$lib/components/Button.svelte';
</script>

<section class="feedback">
	<div class="feedback-content">
		<h2>Help us to improve</h2>
		<h3>You can help a lot of sim pilots by helping us to improve their experiences.</h3>
		<h4>
			Any suggestions about the platform or improvements for a specific checklist are welcome.
			Please, send us your feedback.
		</h4>
		<Button label="Send feedback" variant="primary" />
	</div>
</section>

<style lang="postcss">
	.feedback {
		@apply bg-black py-16;

		& .feedback-content {
			@apply container text-center flex flex-col items-center;

			& h2 {
				@apply text-3xl text-white font-serif font-semibold mb-8;
			}

			& h3 {
				@apply text-2xl text-white font-serif font-medium mb-6;
			}

			& h4 {
				@apply text-base text-white font-normal mb-12;
			}
		}
	}
</style>
