import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import './globals.css'
import { Space_Grotesk, Work_Sans } from 'next/font/google'
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

const fontDisplay = Space_Grotesk({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const fontBody = Work_Sans({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: ReactNode
}): JSX.Element {
  return (
    <html lang="en" className={`${fontDisplay.variable} ${fontBody.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <div className="text-white">
          <Background />
          <Container>{children}</Container>
        </div>
      </body>
    </html>
  )
}
