<template>
	<section class="contacts flex items-center flex-col justify-center w-full mt-[118px]">
		<SectionRectangle class="contacts-rectangle" :img="contacts">
			Контакты
		</SectionRectangle>
		<h3 class="contacts-title font-extrabold text-5xl text-white mt-2 sm:text-4xl">
			Мои контакты
		</h3>
		<div class="mt-8 mx-auto flex items-center">
			<!--			<a-->
			<!--				class="contacts-vk mr-3"-->
			<!--				href="https://vk.com/chopixov"-->
			<!--				target="_blank"-->
			<!--			>-->
			<!--				<svg-->
			<!--					class="svg-hover"-->
			<!--					width="44"-->
			<!--					height="44"-->
			<!--					viewBox="0 0 44 44"-->
			<!--					fill="none"-->
			<!--					xmlns="http://www.w3.org/2000/svg"-->
			<!--				>-->
			<!--					<path-->
			<!--						d="M28.7531 0H15.2469C2.92179 0 0 2.92178 0 15.2469V28.7531C0 41.0782 2.92179 44 15.2469 44H28.7531C41.0782 44 44 41.0782 44 28.7531V15.2469C44 2.92178 41.0493 0 28.7531 0ZM35.5206 31.3875H32.3266C31.1167 31.3875 30.744 30.4278 28.5675 28.2224C26.6769 26.3895 25.8396 26.1462 25.3735 26.1462C24.7149 26.1462 24.5279 26.3318 24.5279 27.2352V30.1212C24.5279 30.8953 24.2845 31.36 22.2358 31.36C18.8479 31.36 15.0888 29.3113 12.453 25.4945C8.47799 19.9011 7.39039 15.7116 7.39039 14.8454C7.39039 14.3793 7.57601 13.9434 8.47111 13.9434H11.672C12.4819 13.9434 12.7899 14.3161 13.1047 15.1823C14.6873 19.7513 17.3231 23.7538 18.4107 23.7538C18.8122 23.7538 18.9978 23.5681 18.9978 22.5438V17.8249C18.8754 15.6484 17.7301 15.4614 17.7301 14.6887C17.7301 14.3161 18.0381 13.9434 18.5317 13.9434H23.5654C24.246 13.9434 24.4962 14.3161 24.4962 15.1177V21.4837C24.4962 22.1712 24.8042 22.4146 24.9898 22.4146C25.3913 22.4146 25.7351 22.1712 26.4789 21.426C28.7779 18.8479 30.4251 14.8729 30.4251 14.8729C30.6395 14.4068 31.0122 13.9709 31.822 13.9709H35.0229C35.9826 13.9709 36.1971 14.4645 35.9826 15.152C35.5811 17.0137 31.6639 22.5424 31.6639 22.5424C31.327 23.1007 31.1978 23.344 31.6639 23.9669C32.0076 24.433 33.1255 25.3996 33.8693 26.2658C35.2374 27.8195 36.2892 29.123 36.5697 30.0249C36.8846 30.92 36.4199 31.3861 35.5165 31.3861L35.5206 31.3875Z"-->
			<!--						fill="#7B4AE2"-->
			<!--						fill-opacity="0.5"-->
			<!--					/>-->
			<!--				</svg>-->
			<!--			</a>-->
			<a class="contacts-tg" href="https://t.me/youngs3lfmade" target="_blank">
				<svg class="svg-hover" width="44" height="44" viewBox="0 0 44 44" fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M22 0C9.856 0 0 9.856 0 22C0 34.144 9.856 44 22 44C34.144 44 44 34.144 44 22C44 9.856 34.144 0 22 0ZM32.208 14.96C31.878 18.436 30.448 26.884 29.722 30.778C29.414 32.428 28.798 32.978 28.226 33.044C26.95 33.154 25.982 32.208 24.75 31.394C22.814 30.118 21.714 29.326 19.844 28.094C17.666 26.664 19.074 25.872 20.328 24.596C20.658 24.266 26.29 19.14 26.4 18.678C26.4153 18.608 26.4132 18.5354 26.3941 18.4664C26.3749 18.3974 26.3392 18.3341 26.29 18.282C26.158 18.172 25.982 18.216 25.828 18.238C25.63 18.282 22.55 20.328 16.544 24.376C15.664 24.97 14.872 25.278 14.168 25.256C13.376 25.234 11.88 24.816 10.758 24.442C9.372 24.002 8.294 23.76 8.382 22.99C8.426 22.594 8.976 22.198 10.01 21.78C16.434 18.986 20.702 17.138 22.836 16.258C28.952 13.706 30.206 13.266 31.042 13.266C31.218 13.266 31.636 13.31 31.9 13.53C32.12 13.706 32.186 13.948 32.208 14.124C32.186 14.256 32.23 14.652 32.208 14.96Z"
						fill="#7B4AE2" fill-opacity="0.5" />
				</svg>
			</a>
		</div>
		<button @click="scrollTo" class="scroll-to flex items-center mt-12 text-primary-dark font-semibold text-xl bg-none">
			Пролистать вверх
			<svg class="svg" width="17" height="29" viewBox="0 0 17 29" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M17 8.14656L8.5 0L0 8.14656L1.42871 9.51579L7.48984 3.70666V29H9.51028V3.70684L15.5713 9.51579L17 8.14656Z"
					fill="#7B4AE2" fill-opacity="0.5" />
			</svg>
		</button>
	</section>
</template>

<script setup lang="ts">
import contacts from '~/assets/img/emojis/contacts.png'
import vk from '~/assets/img/contacts/vk.svg'
import tg from '~/assets/img/contacts/tg.svg'
import arrow from '~/assets/img/contacts/arrow.svg'
import SectionRectangle from './UI/SectionRectangle.vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onMounted } from 'vue'

onMounted(() => {
	if (process.client) {
		gsap.registerPlugin(ScrollTrigger)
		gsap.from('.contacts-rectangle', {
			scrollTrigger: {
				trigger: '.contacts',
				start: '-80% center',
				end: '+=500px',
				// scrub: true,
			},
			xPercent: -100,
			opacity: 0,
		})
		gsap.from('.contacts-title', {
			scrollTrigger: {
				trigger: '.contacts',
				start: '-80% center',
				end: '+=500px',
				// scrub: true,
			},
			yPercent: 100,
			opacity: 0,
		})
		gsap.from('.contacts-vk', {
			scrollTrigger: {
				trigger: '.contacts',
				start: '-80% center',
				end: '+=500px',
				// scrub: true,
			},
			xPercent: -200,
			opacity: 0,
		})
		gsap.from('.contacts-tg', {
			scrollTrigger: {
				trigger: '.contacts',
				start: '-80% center',
				end: '+=500px',
				// scrub: true,
			},
			xPercent: 200,
			opacity: 0,
		})
	}
})

const scrollTo = () => {
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: 'smooth',
	})
}
</script>

<style lang="scss">
.svg {
	margin-left: 10px;
	animation: aniPromo 2.5s infinite forwards;

	path {
		transition: all 0.3s;
	}
}

.scroll-to {
	transition: all 0.3s;

	&:hover {
		color: rgba(123, 74, 226, 0.3);

		svg {
			path {
				fill-opacity: 0.3;
			}
		}
	}
}

.svg-hover {
	path {
		transition: all 0.3s;
	}

	&:hover {
		path {
			fill-opacity: 0.3;
		}
	}
}

@keyframes aniPromo {
	0% {
		transform: scale(1) translateY(0) rotate(0);
	}

	50% {
		transform: scale(1.05) translateY(-10px) rotate(10deg);
	}

	to {
		transform: scale(1) translateY(0) rotate(0);
	}
}
</style>
