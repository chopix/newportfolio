<template>
	<div class="container pt-9">
		<Header />
		<Hero />
		<Experience />
		<AboutMe />
		<Portfolio />
		<Technologies />
		<Contacts />
	</div>
	<Footer />
	<!-- <Preloader v-else-if="isLoaded == false" /> -->
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
