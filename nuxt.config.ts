// https://nuxt.com/docs/api/configuration/nuxt-config

// <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
// <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">

export default defineNuxtConfig({
 app: {
					head: {
									title: 'Toronto Tokyo - fullstack dev',
									meta: [{ name: 'freelancehunt', content: '1896eb1c026e952' }],
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
													{
																	rel: 'apple-touch-icon',
																	sizes: '180x180',
																	href: './assets/apple-touch-icon.png',
													},
													{
																	rel: 'icon',
																	type: 'image/png',
																	sizes: '32x32',
																	href: './assets/favicon-32x32.png',
													},
													{
																	rel: 'icon',
																	type: 'image/png',
																	sizes: '16x16',
																	href: './assets/favicon-16x16.png',
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
 compatibilityDate: '2025-01-23',
});