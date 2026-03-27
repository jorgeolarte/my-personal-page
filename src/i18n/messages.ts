export type Locale = 'en' | 'es'

export type Messages = {
  header: {
    line1: string
    line2: string
    line3: string
    role: string
    imageAlt: string
  }
  main: {
    contentCtaTitle: string
    socialCtaTitle: string
  }
  footer: {
    developedBy: string
    designedBy: string
  }
}

export const messagesByLocale: Record<Locale, Messages> = {
  en: {
    header: {
      line1: 'MSc in Software Engineering',
      line2: 'Following my heart since I was born',
      line3: 'Building tech that helps others grow',
      role: 'Software Developer',
      imageAlt: 'Following my heart',
    },
    main: {
      contentCtaTitle: "What I'm building",
      socialCtaTitle: "Let's connect",
    },
    footer: {
      developedBy: 'Developed with ❤️ by',
      designedBy: 'Designed by',
    },
  },
  es: {
    header: {
      line1: 'Máster en Ingeniería de Software',
      line2: 'Siguiendo mi corazón desde que nací',
      line3: 'Construyendo tecnología que ayuda a crecer',
      role: 'Desarrollador de Software',
      imageAlt: 'Siguiendo mi corazón',
    },
    main: {
      contentCtaTitle: 'Lo que construyo',
      socialCtaTitle: 'Conectemos',
    },
    footer: {
      developedBy: 'Desarrollado con ❤️ por',
      designedBy: 'Diseñado por',
    },
  },
}

export function getMessages(locale: Locale): Messages {
  return messagesByLocale[locale]
}
