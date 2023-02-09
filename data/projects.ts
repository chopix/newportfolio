import westrp from '~/assets/img/projects/westrp.png';
import mordorrp from '~/assets/img/projects/mordorrp.jpg'

interface IProjects {
	title: string;
	subtitle: string;
	tags: Array<String>;
	img: any;
	link?: string;
}

const Projects: Array<IProjects> = [
	{
		title: 'West RP',
		subtitle:
			'Сайт для сервера самп, больше 5-ти страниц, много различных красивых анимаций, слайдеры, модальные окна, система личного кабинета с авторизацией.',
		tags: ['Nuxt JS', 'Laravel'],
		img: westrp,
		link: 'https://west-rp.ru/',
	},
  {
    title: 'Админ панель для Mordor RP',
    subtitle: 'Многофункциональная админ панель для управление сервером самп, почти полное управление сервером с сайта, так же присутствует аналитика онлайна/дохода.',
    tags: ['Vue JS', 'Laravel'],
    img: mordorrp
  }
];

export default Projects;
