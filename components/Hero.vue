<template>
	<main class="w-full mt-25 flex items-center xl:flex-col xl:justify-center xl:items-center">
		<div class="flex flex-col xl:items-center">
			<SectionRectangle class="rectangle" :animateProp="true" :img="hand">Привет!</SectionRectangle>
			<h1 class="title mt-6 text-[52px] text-white w-[189px] font-extrabold xl:text-center">
				chopix
			</h1>
			<h2 class="subtitle mt-4 text-xl text-gray xl:mb-5">Fullstack web developer</h2>
		</div>
		<img class="image ml-[365px] xl:ml-0 xl:mb-25" src="~/assets/img/HeroImage.png" alt="HeroImage" />
	</main>
</template>

<script lang="ts" setup>
import { gsap } from 'gsap';
import SplitTextJS from 'split-text-js';
import SectionRectangle from './UI/SectionRectangle';
import hand from '~/assets/img/emojis/hand.png';
import { onMounted } from 'vue';

onMounted(() => {
	if (process.client) {
		const text = document.querySelector('.subtitle');
		const splittedText = new SplitTextJS(text);
		const tl = gsap.timeline();
		tl.fromTo(
			'.rectangle',
			{
				opacity: 0,
				x: -300,
			},
			{
				opacity: 1,
				x: 0,
			}
		)
			.fromTo(
				'.title',
				{
					opacity: 0,
					height: '0px',
				},
				{
					opacity: 1,
					height: 'auto',
				}
			)
			.fromTo(
				splittedText.chars,
				{
					y: -100,
					opacity: 0,
				},
				{
					y: 0,
					opacity: 1,
					stagger: 0.05,
					duration: 0.5,
				}
			)
			.fromTo(
				'.image',
				{
					opacity: 0,
					scale: 0,
				},
				{
					opacity: 1,
					scale: 1,
					ease: 'Power3.easeInOut',
					duration: 1,
				}
			);
	}
});
</script>
