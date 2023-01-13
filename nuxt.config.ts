// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			link: [
				{
					rel: 'preconnect',
					href: 'https://fonts.googleapis.com',
				},
				{
					rel: 'preconnect',
					href: 'https://fonts.gstatic.com',
					crossorigin: '',
				},
				{
					rel: 'stylesheet',
					href: 'https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700;800;900&display=swap',
				},
			],
		},
	},
	css: ['@/assets/css/tailwind.css'],
	target: 'static',
	ssr: false,
	modules: ['@nuxtjs/tailwindcss'],
	srcDir: './',
	loading: '~/components/Preloader.vue',
});
