<template>
	<section class="experience py-[100px] border-solid border-y border-primary-semi">
		<div class="flex items-center gap-x-48 justify-center lg:flex-col">
			<ExperienceBlock class="experience-block xl:mb-10" :title="$t('experience.one')"
				:subtitle="$t('experience.one_title')" :img="FirstBlockImg" :is-first-letter-capital="false" />
			<ExperienceBlock class="experience-block xl:mb-10" :title="$t('experience.two')"
				:subtitle="$t('experience.two_title')" :img="SecondBlockImg" />
		</div>
		<div
			class="experience-big__block mx-auto flex items-center justify-evenly rounded-2xl max-w-xl w-full h-[110px] bg-primary-semi mt-8 sm:h-[70px] sm:max-w-xs">
			<div class="flex flex-col items-center">
				<p class="text-primary text-base sm:text-xs">{{ $t('experience.developer') }}</p>
				<p class="font-bold text-3xl text-primary sm:text-xl">{{ $t('experience.fullstack') }}</p>
			</div>
			<div class="flex flex-col items-center">
				<p class="text-primary text-base sm:text-xs">{{ $t('experience.commercial') }}</p>
				<p class="font-bold text-3xl text-primary sm:text-xl">{{ $t('experience.experience') }}</p>
			</div>
		</div>
	</section>
</template>

<script lang="ts" setup>
import ExperienceBlock from './UI/ExperienceBlock.vue'
import FirstBlockImg from '~/assets/img/experience/FirstBlock.svg'
import SecondBlockImg from '~/assets/img/experience/SecondBlock.svg'
import ThirdBlockImg from '~/assets/img/experience/ThirdBlock.svg'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onMounted } from 'vue'

onMounted(() => {
	if (process.client) {
		gsap.registerPlugin(ScrollTrigger)
		gsap.from('.experience-block', {
			scrollTrigger: {
				trigger: '.experience',
				start: '-30% center',
				end: '+=450px',
				scrub: true,
			},
			scale: 0,
			transformOrigin: 'left center',
			stagger: 0.5,
			ease: 'none',
		})
		gsap.from('.experience-big__block', {
			scrollTrigger: {
				trigger: '.experience',
				start: '0% center',
				end: '+=500px',

				// scrub: true,
			},
			// width: '200px',
		})
	}
})
</script>
