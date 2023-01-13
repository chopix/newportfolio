<template>
	<div
		class="w-fit px-2 rounded-2xl bg-primary-semi text-primary py-2 text-xl font-bold flex items-center"
	>
		<img
			:class="{ animate: animateProp == true }"
			class="w-6 h-6 mr-2"
			:src="img"
			alt="emoji"
		/>
		<slot />
	</div>
</template>

<script lang="ts" setup>
const props = defineProps({
	img: {
		type: String,
		required: true,
	},
	animateProp: {
		type: Boolean,
		required: false,
	},
});
</script>

<style lang="scss">
.animate {
	animation: rotate-emoji 1s infinite forwards;
}

@keyframes rotate-emoji {
	0% {
		transform: rotate(-10deg);
	}
	50% {
		transform: rotate(10deg);
	}
	100% {
		transform: rotate(-10deg);
	}
}
</style>
