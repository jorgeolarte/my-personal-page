import { notFound } from 'next/navigation'
import { Header } from '@/components/header'
import { Main } from '@/components/main'
import { Footer } from '@/components/ui/footer'
import type { Locale } from '@/src/i18n/messages'

type Props = {
  params: Promise<{ lang: string }>
}

function isLocale(lang: string): lang is Locale {
  return lang === 'en' || lang === 'es'
}

export default async function LangHomePage({
  params,
}: Props): Promise<JSX.Element> {
  const { lang } = await params
  if (!isLocale(lang)) notFound()

  return (
    <>
      <Header locale={lang} />
      <Main locale={lang} />
      <Footer locale={lang} />
    </>
  )
}
