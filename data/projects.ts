import westrp from '~/assets/img/projects/westrp.png'
import mordorrp from '~/assets/img/projects/mordorrp.jpg'
import jetset from '~/assets/img/projects/jetset.png'
import vdome from '~/assets/img/projects/vdome.jpg'
import uxy from '~/assets/img/projects/uxy.jpg'

interface IProjects {
	title: string
	subtitle: string
	tags: Array<String>
	img: any
	link?: string
}

const Projects: Array<IProjects> = [
	{
		title: 'West RP',
		subtitle:
			'Сайт для сервера самп, много различных красивых анимаций, слайдеры, модальные окна, система личного кабинета с авторизацией.',
		tags: ['Nuxt JS', 'Laravel', 'Vue JS'],
		img: westrp,
	},
	{
		title: 'Админ панель для Mordor RP',
		subtitle:
			'Многофункциональная админ панель для управление сервером самп, почти полное управление сервером с сайта, так же присутствует аналитика онлайна/дохода.',
		tags: ['Vue JS', 'Laravel'],
		img: mordorrp,
	},
	{
		title: 'Jetset',
		subtitle:
			'Лендинг для компании Jetset, на сайте присутствует мультиязычность(английский, греческий), и красивые анимации',
		tags: ['Nuxt JS', 'Vue JS', 'GSAP'],
		img: jetset,
	},
	{
		title: 'Vdome',
		subtitle:
			'Сайт для компании молодежной компании VDOME, которая организовывает проекты для молодежи. На сайте присутствуют анимации, так же наполнением сайта можно полностью управлять через телеграмм бота.',
		tags: ['Nuxt JS', 'Vue JS', 'GSAP', 'Laravel'],
		img: vdome,
		link: 'https://vdomeomsk.ru/',
	},
	{
		title: 'UXY',
		subtitle:
			'Огромный по функционалу телеграмм бот, под названием UXY. Бот предназначен для AB тестирования различных рекламных креативов. Суть работы: пользователь добавляет телеграмм канал в бота, затем создает 2 или больше рекламных креатива, затем пользователь выбирает переодичность, с которой будет меняться креативы и время AB теста. Бот постит креатив в канал, затем меняет их с переодичностью, которую указал пользователь. По окончания теста, бот оставляет креатив, который собрал больше всего переходов. В боте присутствует система промокодов, полностью гибкая настройка бота через админ панель и много другого.',
		tags: ['Typescript', 'TelegrafJS', 'MySQL'],
		img: uxy,
	},
]

export default Projects
