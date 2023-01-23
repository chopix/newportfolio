<template>
	<header
		class="header w-full bg-primary-header h-16 rounded-2xl px-6 flex justify-between py-[7px] items-center relative"
    style="z-index: 10000"
	>
		<Logo class="header-logo" />
		<nav>
			<ul class="header-list flex items-center md:hidden">
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
			<button
				@click="showNav = !showNav"
				style="box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)"
				class="hidden md:flex bg-primary-semi w-9 h-9 items-center justify-center relative rounded-2xl"
				:class="{ active: showNav }"
			>
				<div class="menu-bar one"></div>
				<div class="menu-bar two"></div>
				<div class="menu-bar three"></div>
			</button>
		</nav>
    <div v-if="showNav" class="container flex justify-between mobile-menu">
      <ul v-if="showNav" class="flex flex-col justify-center items-center w-full">
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
    </div>
	</header>
</template>

<script lang="ts" setup>
import Logo from './UI/Logo.vue';
import { gsap } from 'gsap';
import { onMounted, ref } from 'vue';

const isDarkTheme = ref(false);
const showNav = ref(false);

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

.mobile-menu {
  position: absolute;
  height: 220px;
  @apply w-full;
  top: 46px;
  left: 0px;
  background-color: #0F1121;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  z-index: 1000;
  animation: growDown 300ms ease-in-out both;
  animation-direction: alternate;
  //animation-iteration-count: infinite;
  transform-origin: top center;

}

@keyframes growDown {
  from {
    transform: scaleY(0)
  }
  to {
    transform: scaleY(1)
  }
}

.menu-bar {
	position: absolute;
	width: 21px;
	height: 2px;
	@apply bg-primary;
	left: 50%;
	transform: translate(-50%, -50%);
	border-radius: 50px;
}

.one {
	top: 10px;
	animation-delay: 0.1s;
	transition: all 0.3s;
}

.two {
	top: 50%;
	transition: all 0.3s;
}

.three {
	top: 22px;
	transition: all 0.3s;
}
@keyframes slideOut {
	0% {
		width: 100%;
		left: 0%;
		right: auto;
	}

	50% {
		width: 0%;
		left: 0%;
		right: auto;
	}
	51% {
		width: 0%;
		right: 0%;
		left: auto;
	}

	100% {
		width: 100%;
		right: 0%;
		left: auto;
	}
}


.active .one {
	top: 50%;
	left: 5px;
	transform: rotate(45deg);
}
.active .two {
	top: 50%;
	left: 5px;
	transform: rotate(-45deg);
}
.active .three {
	top: 50%;
	left: 5px;
	transform: rotate(-45deg);
}

@media screen and (max-width: 767.98px) {
  .header-li__item:not(:last-child) {
    margin-bottom: 10px;
  }
}
</style>
