import type { Metadata } from 'next'
import type React from 'react'

export const metadata: Metadata = {
  title: 'Jorge Olarte | Desarrollador de Software',
  description: 'Siguiendo mi corazón ❤️ desde que nací',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://jorgeolarte.com/es',
    title: 'Jorge Olarte | Desarrollador de Software',
    description: 'Siguiendo mi corazón ❤️ desde que nací',
    images: [
      {
        url: 'https://jorgeolarte.com/jorge-olarte.jpg',
        width: 800,
        height: 800,
        alt: 'Jorge Olarte',
      },
    ],
    siteName: 'Jorge Olarte',
  },
}

export default function EsLayout({
  children,
}: {
  children: React.ReactNode
}): React.ReactNode {
  return children
}

