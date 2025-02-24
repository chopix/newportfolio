import { createI18n } from 'vue-i18n'

export default defineNuxtPlugin(nuxtApp => {
  const i18n = createI18n({
    legacy: false,
    locale: 'ru',
    messages: {
      en: { 
        header: {
            experience: 'Experience',
            about: 'About me',
            portfolio: 'My projects',
            stack: 'Stack',
            contacts: 'Contacts',
        },
        hero: {
          hello: 'Hello',
          name: 'chopix',
        },
        experience: {
          one: 'three years',
          two: 'two and a half years',
          one_title: 'of Development',
          two_title: 'of Commercial experience',
          developer: 'developer',
          fullstack: 'fullstack',
          commercial: 'commercial',
          experience: 'experience'
        },
        about: {
          about: 'About me',
          title: 'Stability - is about me :)',
          one: 'My name is Dima, I\'\m working as a developer and developing websites, telegram bots, parsers, scrappers, checkers.',
          two: 'I have been doing development for more than three years and have confidently mastered technologies such as HTML, CSS, JS/TS, Vue JS, PHP, Laravel, Python, Django. I also have basic knowledge of ExpressJS and NestJS',
          three: 'In my free time, I study new things and self-educate myself both in programming and in various other areas',
          four: 'Every day I try to be better than I was yesterday',
        },
        projects: {
          projects: 'Portfolio',
          title: 'My projects',
          west_desc: 'Site for samp server, many different beautiful animations, sliders, modal windows, personal account system with authorisation.',
          mordor_desc: 'Multifunctional admin panel for samp server management, almost complete server management from the site, as well as present analytics online/income.',
          jetset_desc: 'Landing for the company Jetset, the site has multilingualism (English, Greek), and beautiful animations',
          vdome_desc: 'Website for the youth company VDOME, which organises projects for young people. The site has animations, as well as the content of the site can be fully managed through a telegram bot.',
          uxy_desc: 'A hugely functional telegram bot called UXY. The bot is designed for AB testing of various advertising creatives. The essence of work: the user adds a telegram channel to the bot, then creates 2 or more advertising creatives, then the user selects the frequency with which the creatives will be changed and the time of AB test. The bot posts the creatives to the channel, then changes them with the frequency the user specified. At the end of the test, the bot leaves the creative that has collected the most transitions. The bot has a system of promo codes, fully flexible configuration of the bot through the admin panel and much more.',
          aiton_desc: 'A trading bot with AI inside, where you can select a package from 4 available packages, invest money and the bot will start trading. The packages differ from each other by monthly profit, and minimum deposit. The site also has a referral system, a beautiful animated logo, multi-language.'
        },
        stack: {
          stack: 'Stack of technologies',
          title: 'The technologies that I know',
          confident: 'Technologies that I am confident in',
          not_confident: 'Technologies I\'ve had to work with',
        },
        contacts: {
          contacts: 'Contacts',
          title: 'My contacts',
          up: 'Scroll to top'
        },
      },
      ru: { 
        header: {
          experience: 'Опыт',
          about: 'О мне',
          portfolio: 'Портфолио',
          stack: 'Технологии',
          contacts: 'Контакты',
        },
        hero: {
          hello: 'Привет',
          name: 'chopix',
        },
        experience: {
          one: 'три года',
          two: 'два с половиной года',
          one_title: 'программист',
          two_title: 'коммерческого опыта',
          developer: 'программист',
          fullstack: 'фуллстек',
          commercial: 'коммерческий',
          experience: 'опыт'
        },
        about: {
          about: 'О мне',
          title: 'Надежность - это про меня :)',
          one: 'Меня зовут Дима, я занимаюсь программированием и создаю вебсайты, телеграмм ботов, парсеры, скраперы, чекеры на заказ',
          two: 'Я занимаюсь разработкой уже более трех лет и уверенно освоил такие технологии, как HTML, CSS, JS/TS, Vue JS, PHP, Laravel, Python, Django. Я также обладаю базовыми знаниями ExpressJS и NestJS',
          three: 'В свободное время я изучаю новые вещи и занимаюсь самообразованием как в области программирования, так и в различных других сферах.',
          four: 'Каждый день я стараюсь быть лучше, чем вчера.',
        },
        projects: {
          projects: 'Портфолио',
          title: 'Мои проекты',
          west_desc: 'Сайт для сервера samp, множество различных красивых анимаций, слайдеры, модальные окна, система личного кабинета с авторизацией.',
          mordor_desc: 'Многофункциональная админ-панель для управления сервером samp, практически полное управление сервером с сайта, а также присутствует аналитика онлайн/доходов.',
          jetset_desc: 'Лендинг для компании Jetset, сайт имеет многоязычие (английский, греческий), а также красивые анимации',
          vdome_desc: 'Сайт для молодежной компании VDOME, которая занимается организацией проектов для молодежи. На сайте есть анимация, а также контентом сайта можно полностью управлять через телеграм-бота.',
          uxy_desc: 'Очень функциональный telegram-бот под названием UXY. Бот предназначен для AB-тестирования различных рекламных креативов. Суть работы: пользователь добавляет боту телеграм-канал, затем создает 2 или более рекламных креативов, после чего пользователь выбирает частоту, с которой креативы будут меняться, и время проведения AB-теста. Бот размещает креативы на канале, затем меняет их с указанной пользователем частотой. В конце теста бот оставляет креатив, набравший наибольшее количество переходов. В боте есть система промокодов, полностью гибкая настройка бота через админ-панель и многое другое.',
          aiton_desc: 'Торговый бот с искусственным интеллектом внутри, где вы можете выбрать пакет из 4 доступных, вложить деньги и бот начнет торговлю. Пакеты отличаются друг от друга ежемесячной прибылью и минимальным депозитом. На сайте также есть реферальная система, красивые анимации, мультиязычность.'
        },
        stack: {
          stack: 'Стек технологий',
          title: 'Технологии, которыми я владею',
          confident: 'Технологии, которыми я уверенно владею',
          not_confident: 'Технологии, с которыми мне приходилось работать',
        },
        contacts: {
          contacts: 'Контакты',
          title: 'Мои контакты',
          up: 'Пролистать вверх'
        },
      }
    }
  })
  nuxtApp.vueApp.use(i18n)
})
