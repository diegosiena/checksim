<script lang="ts">
</script>

<section class="features">
	<h2 class="features-title">We are aiming to bring a better experience for sim pilots.</h2>
	<div class="features-content ">
		<div class="feature">
			<img src="/images/illustrations/search.svg" alt="" />
			<h3>Explore</h3>
			<p>
				Search and find the correct checklist for your next flight simulation. Search by
				manufacturer, aircraft type, model, and other filters we provide.
			</p>
		</div>
		<div class="feature">
			<img src="/images/illustrations/check.svg" alt="" />
			<h3>Start</h3>
			<p>
				You can follow the checklist procedures interactively. Navigate through sections, mark items
				as completed, and fly safely.
			</p>
		</div>
		<div class="feature">
			<img src="/images/illustrations/download.svg" alt="" />
			<h3>Download</h3>
			<p>You can also view and download a checklist as PDF if you prefer.</p>
		</div>
	</div>
</section>

<style lang="postcss">
	.features {
		@apply bg-gray-50 py-16;

		& .features-title {
			@apply text-3xl font-serif container text-center mb-20 text-black font-semibold;
		}

		& .features-content {
			@apply container flex flex-col flex-nowrap justify-between gap-24 text-center;

			@screen lg {
				@apply flex-row;
			}

			& .feature {
				@apply flex flex-col flex-1;

				& img {
					@apply h-28;
				}

				& h3 {
					@apply text-xl font-medium font-serif text-black mt-12 mb-2;
				}

				& p {
					@apply text-base font-sans text-gray-600;
				}
			}
		}
	}
</style>
