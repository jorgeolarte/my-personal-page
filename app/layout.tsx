import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import './globals.css'
import { Montserrat as FontSans } from 'next/font/google'
import { Background } from '@/components/ui/background'
import { Container } from '@/components/ui/container'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://jorgeolarte.com'),
  title: {
    default: 'Jorge Olarte',
    template: '%s | Jorge Olarte',
  },
  description: 'Following my heart ❤️ since I was born',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jorgeolarte.com',
    title: 'Jorge Olarte',
    description: 'Following my heart ❤️ since I was born',
    siteName: 'Jorge Olarte',
  },
  keywords: [
    'jorge olarte',
    'web developer',
    'software developer',
    'software engineer',
    'react',
    'nextjs',
    'javascript',
    'typescript',
    'tailwindcss',
    'css',
    'html',
    'developer',
    'programmer',
    'engineer',
    'react developer',
    'nextjs developer',
    'javascript developer',
    'typescript developer',
    'tailwindcss developer',
  ],
}

const fontSans = FontSans({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-sans',
})

export default function RootLayout({
  children,
}: {
  children: ReactNode
}): JSX.Element {
  return (
    <html lang="en" className={fontSans.variable}>
      <body>
        <div className="text-white">
          <Background />
          <Container>{children}</Container>
        </div>
      </body>
    </html>
  )
}
