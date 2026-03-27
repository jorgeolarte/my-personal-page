import type { Metadata } from 'next'
import type React from 'react'
import './globals.css'
import { Montserrat as FontSans } from 'next/font/google'
import { Background } from '@/components/ui/background'
import { Container } from '@/components/ui/container'
import { cookies } from 'next/headers'
import { type Locale } from '@/src/i18n/messages'

export const metadata: Metadata = {
  title: 'Jorge Olarte | Software Developer',
  description: 'Following my heart ❤️ since I was born',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jorgeolarte.com',
    title: 'Jorge Olarte | Software Developer',
    description: 'Following my heart ❤️ since I was born',
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

/**
 * Root layout
 * @param {React.ReactNode} children The sum of the two numbers.
 * @return {JSX.Element} The sum of the two numbers.
 */
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}): Promise<JSX.Element> {
  const cookieStore = await cookies()
  const cookieLocale = cookieStore.get('locale')?.value
  const locale: Locale = cookieLocale === 'es' ? 'es' : 'en'

  return (
    <html lang={locale} className={fontSans.variable}>
      <body>
        <div className="text-white">
          <Background />
          <Container>
            {children}
          </Container>
        </div>
      </body>
    </html>
  )
}
