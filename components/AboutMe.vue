<template>
	<section class="about mt-[141px] w-[926.88px] mx-auto">
		<SectionRectangle class="rectangle-about" :img="monokle"
			>Обо мне</SectionRectangle
		>
		<h3 class="about-title w-[733px] font-extrabold text-5xl text-white mt-6">
			Гений, миллиардер, плейбой, филантроп
		</h3>
		<p class="about-desc mt-6 text-gray text-lg">
			<span class="flex items-center">
				<img
					class="w-[20px] h-[20px] mr-2 animate"
					src="~/assets/img/emojis/hand.png"
					alt="hand"
				/>
				Меня зовут Дима, мой псевдоним chopix, я занимаюсь разработкой сайтов и
				телеграмм ботов на заказ<br /> </span
			><br />
			<span class="flex items-center">
				<img
					class="w-[20px] h-[20px] mr-2"
					src="~/assets/img/emojis/comp.png"
					alt="comp"
				/>
				Более года я занимаюсь веб разработкой, успел уверенно овладеть такими
				технологиями как HTML, CSS, JS/TS, Vue JS, Nest JS. Так же на базовом
				уровне владею PHP, Laravel<br /> </span
			><br />
			<span class="flex items-center">
				<img
					class="w-[20px] h-[20px] mr-2"
					src="~/assets/img/emojis/bulb.png"
					alt="bulb"
				/>
				В свободное время я изучаю что то новое, развиваюсь как в
				програмировании, так и в разных других сферах, ну или же просто играю в
				доту на тинкере<br /> </span
			><br />
			<span class="flex items-center">
				<img
					class="w-[20px] h-[20px] mr-2"
					src="~/assets/img/emojis/rocket.png"
					alt="rocket"
				/>
				Каждый день я пытаюсь быть лучше, чем вчера
			</span>
		</p>
	</section>
</template>

<script setup lang="ts">
import monokle from '~/assets/img/emojis/monokle.png';
import SectionRectangle from './UI/SectionRectangle.vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { onMounted } from 'vue';

onMounted(() => {
	gsap.registerPlugin(ScrollTrigger);
	gsap.from('.rectangle-about', {
		scrollTrigger: {
			trigger: '.about',
			start: '-30% center',
			end: '+=500px',
			// scrub: true,
		},
		xPercent: -100,
		opacity: 0,
	});
	gsap.from('.about-title', {
		scrollTrigger: {
			trigger: '.about',
			start: '-30% center',
			end: '+=500px',
		},
		yPercent: 100,
		opacity: 0,
	});
	gsap.from('.about-desc', {
		scrollTrigger: {
			trigger: '.about',
			start: '-30% center',
			end: '+=300px',
		},
		opacity: 0,
		xPercent: -100,
	});
});
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
</style>
