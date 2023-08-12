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
      work: 'Work',
      about: 'About',
      services: 'Services'
    }
  }
}
