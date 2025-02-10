<template>
	<div @mousemove="ripple" ref="projectBlock"
		class="w-[360px] h-fit border border-solid border-primary-dark py-7 px-[30px] rounded-2xl project-block overflow-hidden sm:w-[280px]">
		<div class="inner">
			<h3 class="text-white font-bold text-xl">{{ title }}</h3>
			<p class="text-gray text-sm mt-2">{{ subtitle }}</p>
			<div class="my-[26px]" v-if="link && link?.length >= 1">
				<a class="text-primary decoration-solid text-sm underline block-link" target="_blank" :href="link">Ссылка</a>
			</div>
			<div :class="{ 'mt-67px': link == undefined }" class="flex items-center flex-wrap gap-y-1">
				<div :key="index" v-for="(item, index) in tags"
					class="bg-primary-semi w-fit px-3 h-[30px] rounded-2xl text-primary font-bold text-base flex justify-center items-center [&:not(:last-child)]:mr-2">
					{{ item }}
				</div>
			</div>
			<img class="mt-5 w-[300px] h-[200px] sm:h-[130px] " :src="img" :alt="title" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
	title: {
		type: String,
		required: true,
	},
	subtitle: {
		type: String,
		required: true,
	},
	tags: {
		type: Array,
		required: true,
	},
	img: {
		type: null,
		required: true,
	},
	link: {
		type: String,
		required: false,
	},
});
const projectBlock = ref(null);

const ripple = (e) => {
	const x = e.pageX - projectBlock.value.offsetLeft;
	const y = e.pageY - projectBlock.value.offsetTop;

	projectBlock.value.style.setProperty('--x', x + 'px');
	projectBlock.value.style.setProperty('--y', y + 'px');
};
</script>

<style lang="scss">
.mt-67px {
	margin-top: 67px;
}

.block-link {
	transition: all 0.3s;

	&:hover {
		@apply text-primary-dark;
	}
}

.inner {
	position: relative;
	z-index: 1;
}

.project-block {
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
		width: 1300px;
		height: 1300px;
	}
}
</style>
