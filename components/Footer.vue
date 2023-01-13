<template>
	<footer
		class="mt-[34px] w-full bg-primary-semi flex items-center justify-center text-gray text-base py-8"
	>
		Copyright © Toronto Tokyo · {{ year }}
	</footer>
</template>

<script setup lang="ts">
let today = new Date();
let year = today.getFullYear();
</script>
