import { publicRoutes } from '@/routes'

export const ES = {
  [`${publicRoutes.HOME}`]: {
    /* keys object to traslate metadata */
    title: 'Danny | Desarrollador de software',
    description: 'Soy Danny, un desarrollador de software y analista de datos ',

    /* keys object to translate content page */
    wellcome:
      '¡Hola! Soy Danny, un desarrollador de software y analista de datos de Colombia. vamos a trabajar juntos.',
    linkText: 'Algo de mi trabajo'
  },
  components: {
    navbar: {
      home: 'Inicio',
      work: 'Mi Trabajo',
      about: 'Sobre Mi',
      services: 'Servicios'
    },
    contact: 'Hablemos!',
    toggleLang: {
      en: 'Traduce al idioma inglés',
      es: 'Traduce al idioma español'
    },
    toggleTheme: {
      system: 'Sistema',
      light: 'Claro',
      dark: 'Oscuro'
    }
  }
}
