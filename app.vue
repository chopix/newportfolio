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

let isLoaded = ref(false);

onMounted(() => {
	setTimeout(() => {
		isLoaded.value = true;
	}, 500);
});
</script>
