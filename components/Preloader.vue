<template>
	<section class="w-full h-screen flex justify-center items-center">
		<svg
			width="305"
			height="223"
			viewBox="0 0 305 223"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle cx="42.5624" cy="38.1829" r="28.5783" stroke="white" />
			<circle cx="275.189" cy="38.1829" r="28.5783" stroke="white" />
			<rect
				class="animate-fiolet"
				x="155.952"
				width="59.1274"
				height="240.133"
				rx="29.5637"
				transform="rotate(40.4994 155.952 0)"
				fill="#7B4AE2"
				fill-opacity="0.5"
			/>
			<rect
				class="animate-white"
				x="220.345"
				y="64.9988"
				width="58.1274"
				height="156.506"
				rx="29.0637"
				transform="rotate(40.5 220.345 64.9988)"
			/>
		</svg>
	</section>
</template>

<script setup lang="ts">
import Logo from './UI/Logo.vue';
</script>

<style scoped lang="scss">
.animate-fiolet {
	animation: animation-fiolet-rect 1.5s infinite forwards;
}

.animate-white {
	fill: '#FFFFFF';
	animation: animation-white-rect 1.5s infinite forwards;
}

@keyframes animation-fiolet-rect {
	0% {
		fill: '#7B4AE2';
		fill-opacity: 0.5;
	}
	50% {
		fill: white;
		fill-opacity: 1;
	}
	100% {
		fill: '#7B4AE2';
		fill-opacity: 0.5;
	}
}

@keyframes animation-white-rect {
	from {
		fill: white;
	}
	50% {
		@apply fill-primary;
		fill-opacity: 0.5;
	}
	to {
		fill: white;
	}
}
</style>
