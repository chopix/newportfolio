<template>
	<section class="contacts flex items-center flex-col justify-center w-full mt-[118px]">
		<SectionRectangle class="contacts-rectangle" :img="contacts">
			{{ $t('contacts.contacts') }}
		</SectionRectangle>
		<h3 class="contacts-title font-extrabold text-5xl text-white mt-2 sm:text-4xl">
			{{ $t('contacts.title') }}
		</h3>
		<div class="mt-8 mx-auto flex items-center gap-x-5">
			<a class="contacts-tg" href="https://t.me/youngs3lfmade" target="_blank">
				<svg class="svg-hover" width="44" height="44" viewBox="0 0 44 44" fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M22 0C9.856 0 0 9.856 0 22C0 34.144 9.856 44 22 44C34.144 44 44 34.144 44 22C44 9.856 34.144 0 22 0ZM32.208 14.96C31.878 18.436 30.448 26.884 29.722 30.778C29.414 32.428 28.798 32.978 28.226 33.044C26.95 33.154 25.982 32.208 24.75 31.394C22.814 30.118 21.714 29.326 19.844 28.094C17.666 26.664 19.074 25.872 20.328 24.596C20.658 24.266 26.29 19.14 26.4 18.678C26.4153 18.608 26.4132 18.5354 26.3941 18.4664C26.3749 18.3974 26.3392 18.3341 26.29 18.282C26.158 18.172 25.982 18.216 25.828 18.238C25.63 18.282 22.55 20.328 16.544 24.376C15.664 24.97 14.872 25.278 14.168 25.256C13.376 25.234 11.88 24.816 10.758 24.442C9.372 24.002 8.294 23.76 8.382 22.99C8.426 22.594 8.976 22.198 10.01 21.78C16.434 18.986 20.702 17.138 22.836 16.258C28.952 13.706 30.206 13.266 31.042 13.266C31.218 13.266 31.636 13.31 31.9 13.53C32.12 13.706 32.186 13.948 32.208 14.124C32.186 14.256 32.23 14.652 32.208 14.96Z"
						fill="#7B4AE2" fill-opacity="0.5" />
				</svg>
			</a>
			<a class="contacts-lolz" href="https://lolz.live/threads/8200558/" target="_blank">
				<svg class="svg-hover" width="44" height="44" viewBox="0 0 64 64" fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd"
						d="M17.5371 51.8461C22.9532 56.246 29.21 58.7535 35.8828 58.7535C45.8058 58.7535 54.8137 53.1919 61.4984 44.1334C58.6759 40.3098 55.4406 37.1071 51.8933 34.6858L46.1979 37.529C47.422 39.4334 48.135 41.7002 48.135 44.1334C48.135 50.8924 42.6506 56.3708 35.8828 56.3708C30.6242 56.3708 26.141 53.0612 24.403 48.4146L17.5371 51.8431V51.8461ZM31.667 44.79C31.8036 45.6783 32.2196 46.5043 32.8643 47.149C33.6635 47.9482 34.7508 48.3968 35.8828 48.3938C38.2387 48.3938 40.1491 46.4864 40.1491 44.1334C40.1491 42.9777 39.6886 41.929 38.9399 41.1595L31.6699 44.79H31.667Z"
						fill="#7B4AE2" fill-opacity="0.5" />
					<path
						d="M19.0882 44.038L60.6014 24.082L51.4776 5.10352L46.7656 21.8746L41.103 10.0918L36.3881 26.8628L30.7254 15.08L26.0105 31.8511L20.3479 20.0682L15.633 36.8393L9.97035 25.0565L2.36768 52.0774L12.7452 47.0891L19.0882 44.0409V44.038Z"
						fill="#7B4AE2" fill-opacity="0.5" />
				</svg>


			</a>
		</div>
		<button @click="scrollTo" class="scroll-to flex items-center mt-12 text-primary-dark font-semibold text-xl bg-none">
			{{ $t('contacts.up') }}
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
		gsap.from('.contacts-lolz', {
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
