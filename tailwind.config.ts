import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default <Partial<Config>>{
	content: [
		'./components/**/*.{js,vue,ts}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./nuxt.config.{js,ts}',
		'./app.vue',
		'./components/Hero.vue',
	],
	darkMode: 'class',
	theme: {
		container: {
			padding: '20px',
			center: true,
		},
		screens: {
			lg: { max: '991.98px' },
			md: { max: '767.98' },
			sm: { max: '479.98px' },
		},
		colors: {
			primary: '#7B4AE2',
			'primary-dark': 'rgba(123, 74, 226, 0.5)',
			'primary-semi': 'rgba(123, 74, 226, 0.1)',
			'primary-header': 'rgba(123, 74, 226, 0.05)',
			'light-header': '#8E75C4',
			black: '#000000',
			gray: 'rgba(255, 255, 255, 0.5)',
			white: '#fff',
		},
	},
};
