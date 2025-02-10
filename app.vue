<template>
	<div v-if="isLoaded == true" class="container pt-9">
		<div class="h-screen xl:h-auto">
			<Header />
			<Hero />
		</div>
		<Experience />
		<AboutMe />
		<Portfolio />
		<Technologies />
		<Contacts />
	</div>
	<Footer v-if="isLoaded == true" />
	<Preloader v-else-if="isLoaded == false" />
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n'
import { useCookie } from '#app'
import { onBeforeMount } from 'vue'

const { locale } = useI18n()
const userLang = useCookie('user-lang')

onBeforeMount(async () => {
	if (!userLang.value) {
		const browserLang = navigator.language || navigator.language
		const lang = browserLang.startsWith('ru') ? 'ru' : 'en'

		userLang.value = lang
	}

	// Устанавливаем язык в i18n
	locale.value = userLang.value
})

let isLoaded = ref(false);

onMounted(() => {
	setTimeout(() => {
		isLoaded.value = true;
	}, 500);
});
</script>
