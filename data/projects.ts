import westrp from '~/assets/img/projects/westrp.png'
import mordorrp from '~/assets/img/projects/mordorrp.jpg'
import jetset from '~/assets/img/projects/jetset.png'
import vdome from '~/assets/img/projects/vdome.jpg'
import uxy from '~/assets/img/projects/uxy.jpg'
import aiton from '~/assets/img/projects/aiton.jpg'

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
			'projects.west_desc',
		tags: ['Nuxt JS', 'Laravel', 'Vue JS'],
		img: westrp,
	},
	{
		title: 'Mordor RP CRM',
		subtitle:
			'projects.mordor_desc',
		tags: ['Vue JS', 'Laravel'],
		img: mordorrp,
	},
	{
		title: 'Jetset',
		subtitle:
			'projects.jetset_desc',
		tags: ['Nuxt JS', 'Vue JS', 'GSAP'],
		img: jetset,
	},
	{
		title: 'Vdome',
		subtitle:
			'projects.vdome_desc',
		tags: ['Nuxt JS', 'Vue JS', 'GSAP', 'Laravel'],
		img: vdome,
	},
	{
		title: 'UXY',
		subtitle:
			'projects.uxy_desc',
		tags: ['Typescript', 'TelegrafJS', 'MySQL'],
		img: uxy,
	},
	{
		title: 'AI Ton Bot',
		subtitle:
			'projects.aiton_desc',
		tags: ['Typescript', 'VueJS', 'GrammyJS', 'Telegram Web App', 'Web3', 'GSAP'],
		img: aiton,
	},
]

export default Projects
