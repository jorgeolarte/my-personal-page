import linksJson from './links.json'

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

const rawLinks = linksJson as RawLink[]

const allLinks: AllLink[] = rawLinks
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

export const links = {
  allLinks,
}

