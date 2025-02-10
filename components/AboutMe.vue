<template>
	<section class="about mt-36 max-w-5xl mx-auto md:flex md:flex-col md:items-center">
		<SectionRectangle class="rectangle-about" :img="monokle">
			{{ $t('about.about') }}
		</SectionRectangle>
		<h3 class="about-title max-w-3xl font-extrabold text-5xl text-white mt-6 md:text-center md:text-4xl sm:text-3xl">
			{{ $t('about.title') }}
		</h3>
		<p class="about-desc mt-6 text-gray text-lg">
			<span class="flex items-center">
				<img class="w-5 h-5 mr-2 animate" src="~/assets/img/emojis/hand.png" alt="hand" />
				{{ $t('about.one') }}
				<br />
			</span>
			<br />
			<span class="flex items-center">
				<img class="w-5 h-5 mr-2" src="~/assets/img/emojis/comp.png" alt="comp" />
				{{ $t('about.two') }}
				<br />
			</span>
			<br />
			<span class="flex items-center">
				<img class="w-5 h-5 mr-2" src="~/assets/img/emojis/bulb.png" alt="bulb" />
				{{ $t('about.three') }}
				<br />
			</span>
			<br />
			<span class="flex items-center">
				<img class="w-5 h-5 mr-2" src="~/assets/img/emojis/rocket.png" alt="rocket" />
				{{ $t('about.four') }}
			</span>
		</p>
	</section>
</template>

<script setup lang="ts">
import monokle from '~/assets/img/emojis/monokle.png'
import SectionRectangle from './UI/SectionRectangle.vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onMounted } from 'vue'

onMounted(() => {
	gsap.registerPlugin(ScrollTrigger)
	gsap.from('.rectangle-about', {
		scrollTrigger: {
			trigger: '.about',
			start: '-30% center',
			end: '+=500px',
			// scrub: true,
		},
		xPercent: -100,
		opacity: 0,
	})
	gsap.from('.about-title', {
		scrollTrigger: {
			trigger: '.about',
			start: '-30% center',
			end: '+=500px',
		},
		yPercent: 100,
		opacity: 0,
	})
	gsap.from('.about-desc', {
		scrollTrigger: {
			trigger: '.about',
			start: '-30% center',
			end: '+=300px',
		},
		opacity: 0,
		xPercent: -100,
	})
})
</script>

<style lang="scss" scoped>
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

.about-desc {
	@apply max-w-5xl;
	@apply md:text-base;
	@apply sm:text-sm;
}
</style>
