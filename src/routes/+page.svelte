<script lang="ts">
	import aircraft from '$lib/assets/images/illustrations/aircraft.svg';
	import AircraftCard from '$lib/components/Cards/AircraftCard.svelte';
	import CardList from '$lib/components/Cards/CardList.svelte';
	import data from '$lib/data/index.json';
</script>

<main>
	<section class="hero">
		<div class="content">
			<div>
				<h1>To the skies!</h1>
				<h2>Find easily a checklist, turn the engines on, and have fun in the skies.</h2>
				<p>* for simulation purposes only.</p>
			</div>
			<img src={aircraft} alt="Checksim logo" />
		</div>
	</section>
	<section class="list">
		<div class="container">
			<h2>Checklists</h2>
			<CardList>
				{#each data as item}
					<AircraftCard
						manufacturer={item.aircraft.manufacturer}
						type={item.aircraft.type}
						label={item.label}
						imageUrl={item.aircraft.imageUrl}
						slug={item.slug}
					/>
				{/each}
			</CardList>
		</div>
	</section>
</main>

<style lang="postcss">
	.hero {
		@apply h-[560px] bg-cover bg-bottom;
		background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1220%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(24%2c 24%2c 35%2c 1)'%3e%3c/rect%3e%3cpath d='M1512 560L0 560 L0 481.79Q28.25 438.04%2c 72 466.29Q99.74 422.03%2c 144 449.77Q194.05 427.81%2c 216 477.86Q259.48 449.34%2c 288 492.82Q307.91 440.73%2c 360 460.64Q426.42 407.06%2c 480 473.47Q551.88 425.36%2c 600 497.24Q636.35 413.59%2c 720 449.94Q769.71 427.65%2c 792 477.37Q819.92 433.29%2c 864 461.21Q938.03 415.24%2c 984 489.27Q999.41 432.69%2c 1056 448.1Q1126.89 399%2c 1176 469.89Q1220.65 442.54%2c 1248 487.19Q1314.24 433.43%2c 1368 499.66Q1391.08 450.74%2c 1440 473.82Q1465.01 426.83%2c 1512 451.84z' fill='rgba(83%2c 127%2c 231%2c 1)'%3e%3c/path%3e%3cpath d='M1488 560L0 560 L0 496.81Q73.38 450.19%2c 120 523.57Q187 470.58%2c 240 537.58Q257.54 483.12%2c 312 500.66Q360.51 477.17%2c 384 525.68Q449.41 471.09%2c 504 536.5Q519.92 480.42%2c 576 496.34Q622.75 471.09%2c 648 517.83Q692.06 489.89%2c 720 533.96Q738.98 480.94%2c 792 499.91Q860.49 448.4%2c 912 516.89Q957.68 442.57%2c 1032 488.26Q1113.11 449.37%2c 1152 530.47Q1181.34 487.81%2c 1224 517.14Q1277.22 450.37%2c 1344 503.59Q1394.64 482.23%2c 1416 532.87Q1442.78 487.65%2c 1488 514.43z' fill='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/path%3e%3cpath d='M1464 560L0 560 L0 572.98Q14.68 515.66%2c 72 530.35Q116.05 502.4%2c 144 546.46Q186.88 517.34%2c 216 560.22Q261.75 485.98%2c 336 531.73Q404.21 479.94%2c 456 548.16Q502.18 522.34%2c 528 568.51Q547.86 516.37%2c 600 536.22Q669.05 485.27%2c 720 554.32Q786.12 500.44%2c 840 566.56Q882.87 489.42%2c 960 532.29Q1026.62 478.9%2c 1080 545.52Q1145.44 490.96%2c 1200 556.4Q1243.83 480.23%2c 1320 524.06Q1365.81 497.87%2c 1392 543.68Q1441.03 520.71%2c 1464 569.75z' fill='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1220'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");

		& .content {
			@apply h-[560px];
			@apply container flex flex-nowrap flex-row justify-between items-center pb-36 space-x-16;

			& img {
				@apply h-56;
			}

			& h1 {
				@apply text-white text-7xl font-extrabold font-serif mb-6;
			}

			& h2 {
				@apply text-white text-xl font-serif;
			}

			& p {
				@apply text-slate-400 text-sm font-serif mt-4;
			}
		}
	}

	.list {
		@apply py-12;

		& h2 {
			@apply text-black text-4xl font-serif font-semibold mb-8;
		}
	}
</style>
