<template>
	<div
		ref="rippleRef"
		@mousemove="ripple"
		class="experience-block h-[200px] w-[246px] flex flex-col justify-center items-center border border-solid border-primary-dark rounded-2xl overflow-hidden"
	>
		<div class="inner flex flex-col justify-center items-center">
			<img :src="img" alt="block-img" />
			<p
				:class="{ 'first-letter': isFirstLetterCapital }"
				class="text-white text-sm mt-[10px]"
			>
				{{ title }}
			</p>
			<p class="text-white font-bold text-base mt-[10px]">{{ subtitle }}</p>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const rippleRef = ref(null);

const props = defineProps({
	img: {
		type: null,
		required: true,
	},
	title: {
		type: String,
		required: true,
	},
	subtitle: {
		type: String,
		required: true,
	},
	isFirstLetterCapital: {
		type: Boolean,
		required: false,
	},
});

const ripple = (e) => {
	const x = e.pageX - rippleRef.value.offsetLeft;
	const y = e.pageY - rippleRef.value.offsetTop;

	rippleRef.value.style.setProperty('--x', x + 'px');
	rippleRef.value.style.setProperty('--y', y + 'px');
};
</script>

<style lang="scss" scoped>
.first-letter {
	&::first-letter {
		@apply text-lg;
	}
}

.inner {
	position: relative;
	z-index: 1;
}
.experience-block {
	position: relative;
	&::before {
		content: '';
		position: absolute;
		top: var(--y);
		left: var(--x);
		transform: translate(-50%, -50%);
		width: 0px;
		height: 0px;
		border-radius: 50%;
		background: rgba(123, 74, 226, 0.1);
		transition: width 0.7s, height 0.7s;
	}
	&:hover::before {
		width: 600px;
		height: 600px;
	}
}
</style>
