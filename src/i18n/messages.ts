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
      line1: '💻 MSc In Software Engineering just because',
      line2: '🤓 Following my heart since I was born',
      line3: '😎 I found out my purpose helping others',
      role: 'Software Developer',
      imageAlt: 'Following my heart',
    },
    main: {
      contentCtaTitle: 'Check out this',
      socialCtaTitle: 'Follow me',
    },
    footer: {
      developedBy: 'Developed with ❤️ by',
      designedBy: 'Designed by',
    },
  },
  es: {
    header: {
      line1: '💻 MSc en Ingeniería de Software porque sí',
      line2: '🤓 Siguiendo mi corazón desde que nací',
      line3: '😎 Descubrí mi propósito ayudando a otros',
      role: 'Desarrollador de Software',
      imageAlt: 'Siguiendo mi corazón',
    },
    main: {
      contentCtaTitle: 'Mira esto',
      socialCtaTitle: 'Sígueme',
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
