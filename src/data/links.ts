import type { Locale } from '@/src/i18n/messages'
import linksEnJson from './links.en.json'
import linksEsJson from './links.es.json'

type LinkType = 'social' | 'content'

type RawLink = {
  type: LinkType
  url: string
  text: string
  target: string
  icon: string
  orden: number
}

export type AllLink = {
  title: string
  url: string
  target: string
  icon: string
  active: boolean
  social: boolean
}

function normalizeIconPath(icon: string): string {
  // `next/image` requiere una ruta válida desde `public/`, por eso normalizamos a una ruta absoluta.
  return icon.startsWith('/') ? icon : `/${icon}`
}

function normalizeLinks(rawLinks: RawLink[]): AllLink[] {
  return rawLinks
    .slice()
    .sort((a, b) => a.orden - b.orden)
    .map((link) => ({
      title: link.text,
      url: link.url,
      target: link.target,
      icon: normalizeIconPath(link.icon),
      active: true,
      social: link.type === 'social',
    }))
}

const rawLinksEn = linksEnJson as RawLink[]
const rawLinksEs = linksEsJson as RawLink[]

export function getLinks(locale: Locale) {
  return {
    allLinks:
      locale === 'es' ? normalizeLinks(rawLinksEs) : normalizeLinks(rawLinksEn),
  }
}

// Backwards-compat default export for existing imports (English).
export const links = getLinks('en')
