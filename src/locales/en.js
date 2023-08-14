import { publicRoutes } from '@/routes'

export const EN = {
  [`${publicRoutes.HOME}`]: {
    /* keys object to traslate metadata */
    title: 'Danny | Software Development',
    description: "I'm danny, a software developer",

    /* keys object to translate content page */
    wellcome:
      "Hello! I'm Danny, a software developer and data analyst from Colombia. Let's work together.",
    linkText: 'View all my work'
  },
  components: {
    navbar: {
      home: 'Home',
      work: 'My Work',
      about: 'About Me',
      services: 'Services'
    },
    toggleLang: {
      en: 'Translate into english language',
      es: 'Translate into spanish language'
    },
    toggleTheme: {
      system: 'System',
      light: 'Light',
      dark: 'Dark'
    }
  }
}
