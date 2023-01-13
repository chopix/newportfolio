<template>
	<div>
		<header
			class="header w-full bg-primary-header h-16 rounded-2xl px-6 flex justify-between py-[7px] items-center"
		>
			<Logo class="header-logo" />
			<nav>
				<ul class="header-list flex items-center">
					<li
						@click="scrollToExp"
						class="header-li__item text-white text-lg hover:text-primary cursor-pointer"
					>
						Опыт
					</li>
					<li
						@click="scrollToAbout"
						class="header-li__item text-white text-lg hover:text-primary cursor-pointer"
					>
						Обо мне
					</li>
					<li
						@click="scrollToPort"
						class="header-li__item text-white text-lg hover:text-primary cursor-pointer"
					>
						Портфолио
					</li>
					<li
						@click="scrollToTech"
						class="header-li__item text-white text-lg hover:text-primary cursor-pointer"
					>
						Технологии
					</li>
					<li
						@click="scrollToCont"
						class="header-li__item text-white text-lg hover:text-primary cursor-pointer"
					>
						Контакты
					</li>
				</ul>
			</nav>
		</header>
	</div>
</template>

<script lang="ts" setup>
import Logo from './UI/Logo.vue';
import { gsap } from 'gsap';
import { onMounted, ref } from 'vue';

const isDarkTheme = ref(false);

function scrollToExp() {
	let el = document.querySelector('.experience');
	el.scrollIntoView({ block: 'center', behavior: 'smooth' });
}
function scrollToAbout() {
	let el = document.querySelector('.about');
	el.scrollIntoView({ block: 'center', behavior: 'smooth' });
}
function scrollToPort() {
	let el = document.querySelector('.portfolio');
	el.scrollIntoView({ block: 'center', behavior: 'smooth' });
}
function scrollToTech() {
	let el = document.querySelector('.technologies');
	el.scrollIntoView({ block: 'center', behavior: 'smooth' });
}
function scrollToCont() {
	let el = document.querySelector('.contacts');
	el.scrollIntoView({ block: 'center', behavior: 'smooth' });
}

onMounted(() => {
	if (process.client) {
		console.log(localStorage.theme);
		const tl = gsap.timeline();
		tl.fromTo(
			'.header-logo',
			{
				y: 50,
				opacity: 0,
			},
			{
				y: 0,
				opacity: 1,
				duration: 0.6,
			}
		)
			.fromTo(
				'.header-li__item',
				{
					scale: 0,
					opacity: 0,
				},
				{
					scale: 1,
					opacity: 1,
					stagger: 0.2,
					duration: 0.3,
				}
			)
			.fromTo(
				'.header-li__item-final',
				{
					scale: 0,
					opacity: 0,
				},
				{
					scale: 1,
					opacity: 1,
				}
			);
	}
});
</script>

<style lang="scss">
.header-list {
	li:not(:last-child) {
		@apply mr-10;
		transition: all 0.4s;
	}
}
</style>
