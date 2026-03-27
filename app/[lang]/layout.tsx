import type { Metadata } from 'next'
import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  params: Promise<{ lang: string }>
}

type Locale = 'en' | 'es'

function isLocale(lang: string): lang is Locale {
  return lang === 'en' || lang === 'es'
}

export async function generateMetadata({
  params,
}: Omit<Props, 'children'>): Promise<Metadata> {
  const { lang } = await params
  const locale: Locale = isLocale(lang) ? lang : 'en'

  const isEs = locale === 'es'
  const title = isEs
    ? 'Jorge Olarte | Desarrollador de Software'
    : 'Jorge Olarte | Software Developer'
  const description = isEs
    ? 'Siguiendo mi corazón ❤️ desde que nací'
    : 'Following my heart ❤️ since I was born'
  const canonical = isEs
    ? 'https://jorgeolarte.com/es'
    : 'https://jorgeolarte.com/en'

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        en: 'https://jorgeolarte.com/en',
        es: 'https://jorgeolarte.com/es',
      },
    },
    openGraph: {
      type: 'website',
      locale: isEs ? 'es_ES' : 'en_US',
      url: canonical,
      title,
      description,
      siteName: 'Jorge Olarte',
    },
  }
}

export default function LangLayout({ children }: Props): ReactNode {
  return children
}
