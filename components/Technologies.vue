<template>
	<section class="technologies mt-[128px] flex justify-center items-center flex-col block">
		<SectionRectangle :img="comp" class="technologies-rectangle">
			{{ $t('stack.stack') }}
		</SectionRectangle>
		<h3 class="technologies-title mt-5 text-5xl text-white font-extrabold md:text-center md:text-4xl md">
			{{ $t('stack.title') }}
		</h3>
		<p class="technologies-subtitle text-gray text-2xl mt-[103px] md:mt-[50px] sm:text-center">
			{{ $t('stack.confident') }}
		</p>
		<div class="mt-[37px] max-w-[936px] w-full flex items-center justify-center gap-7 md:flex-wrap">
			<div class="hover-tooltip relative" :key="index" v-for="(item, index) in confidently">
				<img class="technologies-img h-[64px]" :src="item.path" :alt="item.name" />
				<div
					class="tooltip flex invisible opacity-0 justify-center items-center border-solid border border-primary w-fit px-2 rounded-xl absolute h-[29px] text-primary text-sm font-bold -bottom-12 left-1/2 -translate-x-1/2 z-50">
					{{ item.name }}
				</div>
			</div>
		</div>
		<p class="technologies-subtitle text-gray text-2xl mt-[64px] sm:text-center">
			{{ $t('stack.not_confident') }}
		</p>
		<div class="mt-[37px] max-w-[936px] w-full flex items-center justify-center gap-7 md:flex-wrap">
			<div class="hover-tooltip relative" :key="index" v-for="(item, index) in notConfidently">
				<img class="technologies-img h-[64px] md:mb-4" :src="item.path" :alt="item.name" />
				<div
					class="tooltip flex invisible opacity-0 justify-center items-center border-solid border border-primary w-fit px-2 rounded-xl absolute h-[29px] text-primary text-sm font-bold -bottom-12 left-1/2 -translate-x-1/2 z-50">
					{{ item.name }}
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import comp from '~/assets/img/emojis/comp.png'
import css from '~/assets/img/technologies/confidently/css.svg'
import git from '~/assets/img/technologies/confidently/git.svg'
import github from '~/assets/img/technologies/confidently/github.svg'
import nest from '~/assets/img/technologies/confidently/nest.svg'
import vue from '~/assets/img/technologies/confidently/vue.svg'
import nuxt from '~/assets/img/technologies/confidently/nuxt.svg'
import html from '~/assets/img/technologies/confidently/html.svg'
import insomnia from '~/assets/img/technologies/confidently/insomnia.svg'
import js from '~/assets/img/technologies/confidently/js.svg'
import ts from '~/assets/img/technologies/confidently/ts.svg'
import sass from '~/assets/img/technologies/confidently/sass.svg'
import laravel from '~/assets/img/technologies/laravel.svg'
import mongo from '~/assets/img/technologies/mongo.svg'
import mysql from '~/assets/img/technologies/mysql.svg'
import next from '~/assets/img/technologies/next.svg'
import react from '~/assets/img/technologies/react.svg'
import nginx from '~/assets/img/technologies/nginx.svg'
import nodejs from '~/assets/img/technologies/nodejs.svg'
import php from '~/assets/img/technologies/php.svg'
import tailwind from '~/assets/img/technologies/tailwind.svg'
import SectionRectangle from './UI/SectionRectangle.vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onMounted } from 'vue'
import SplitTextJS from 'split-text-js'

onMounted(() => {
	if (process.client) {
		const text = document.querySelectorAll('.technologies-subtitle')
		const splittedTextOne = new SplitTextJS(text[0])
		const splittedTextTwo = new SplitTextJS(text[1])
		gsap.registerPlugin(ScrollTrigger)
		gsap.from('.technologies-rectangle', {
			scrollTrigger: {
				trigger: '.technologies',
				start: '-30% center',
				end: '+=500px',
				// scrub: true,
			},
			xPercent: -100,
			opacity: 0,
		})
		gsap.from('.technologies-title', {
			scrollTrigger: {
				trigger: '.technologies',
				start: '-30% center',
				end: '+=500px',
				// scrub: true,
			},
			yPercent: 100,
			opacity: 0,
		})
		gsap.from(splittedTextOne.words, {
			scrollTrigger: {
				trigger: '.technologies',
				start: '-30% center',
				end: '+=500px',
				// scrub: true,
			},
			translateY: 50,
			stagger: 0.2,
			opacity: 0,
		})
		gsap.from(splittedTextTwo.words, {
			scrollTrigger: {
				trigger: '.technologies',
				start: '-30% center',
				end: '+=500px',
				// scrub: true,
			},
			translateY: -50,
			stagger: 0.2,
			opacity: 0,
		})
		gsap.from('.technologies-img', {
			scrollTrigger: {
				trigger: '.technologies',
				start: '-30% center',
				end: '+=500px',
			},
			xPercent: -200,
			opacity: 0,
			stagger: 0.1,
		})
	}
})

const confidently = [
	{
		path: html,
		name: 'HTML5',
	},
	{
		path: css,
		name: 'CSS3',
	},
	{
		path: sass,
		name: 'SASS',
	},
	{
		path: js,
		name: 'JavaScript',
	},
	{
		path: ts,
		name: 'TypeScript',
	},
	{
		path: vue,
		name: 'VueJS',
	},
	{
		path: nuxt,
		name: 'NuxtJS',
	},
	{
		path: git,
		name: 'Git',
	},
	{
		path: github,
		name: 'Github',
	},
	{
		path: insomnia,
		name: 'Insomnia',
	},
	{
		path: tailwind,
		name: 'TailwindCSS',
	},
	{
		path: php,
		name: 'PHP',
	},
	{
		path: laravel,
		name: 'Laravel',
	},
	{
		path: mysql,
		name: 'MySQL',
	},
	{
		path: nginx,
		name: 'Nginx',
	},
]
const notConfidently = [
	{
		path: nodejs,
		name: 'NodeJS',
	},
	{
		path: react,
		name: 'ReactJS',
	},
	{
		path: next,
		name: 'NextJS',
	},
	{
		path: mongo,
		name: 'MongoDB',
	},
	{
		path: nest,
		name: 'NestJS',
	},
]
</script>

<style lang="scss">
.hover-tooltip {
	transition: all 0.3s;
}

.tooltip {
	transition: all 0.3s;
}

.hover-tooltip:hover {
	.tooltip {
		// display: flex;
		visibility: visible;
		opacity: 1;
	}
}
</style>
