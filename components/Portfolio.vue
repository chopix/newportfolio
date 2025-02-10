<template>
	<section class="portfolio mt-[208px] md:mt-[100px]">
		<SectionRectangle class="rectangle-portfolio" :img="link">{{ $t('projects.projects') }}</SectionRectangle>
		<h3 class="portfolio-title max-w-3xl font-extrabold text-5xl text-white mt-6">
			{{ $t('projects.title') }}
		</h3>
		<div class="mt-[100px] px-4 flex items-start gap-12 justify-center flex-wrap">
			<ProjectBlock class="portfolio-block" :key="index" v-for="(item, index) in Projects" :title="item.title"
				:subtitle="$t(item.subtitle)" :img="item.img" :link="item.link" :tags="item.tags" />
		</div>
	</section>
</template>

<script setup lang="ts">
import link from '~/assets/img/emojis/link.png';
import Projects from '../data/projects';
import ProjectBlock from './UI/ProjectBlock.vue';
import SectionRectangle from './UI/SectionRectangle.vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { onMounted } from 'vue';

onMounted(() => {
	gsap.registerPlugin(ScrollTrigger);
	gsap.from('.rectangle-portfolio', {
		scrollTrigger: {
			trigger: '.portfolio',
			start: '-30% center',
			end: '+=500px',
			// scrub: true,
		},
		xPercent: -100,
		opacity: 0,
	});
	gsap.from('.portfolio-title', {
		scrollTrigger: {
			trigger: '.portfolio',
			start: '-30% center',
			end: '+=500px',
		},
		yPercent: 100,
		opacity: 0,
	});
	gsap.from('.portfolio-block', {
		scrollTrigger: {
			trigger: '.portfolio',
			start: '20% center',
			end: '+=1500px',
		},
		yPercent: -100,
		scale: 0,
		duration: 1,
		opacity: 0,
		stagger: 0.25,
	});
});
</script>
