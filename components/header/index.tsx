import { HeaderWrapper } from '@/components/header/header-wrapper'
import { ImageHeader } from '@/components/header/image-header'
import { getMessages, type Locale } from '@/src/i18n/messages'

/**
 * Show the header.
 * @return {JSX.Element} The sum of the two numbers.
 */
export function Header({ locale }: { locale: Locale }): JSX.Element {
  const messages = getMessages(locale)
  const homeHref = locale === 'es' ? '/es' : '/en'

  return (
    <HeaderWrapper>
      <ImageHeader messages={messages} homeHref={homeHref} locale={locale} />
      <div className="space-y-1 max-w-md">
        <p className="font-body text-base text-white/70 leading-relaxed">
          {messages.header.line1}
        </p>
        <p className="font-body text-base text-white/70 leading-relaxed">
          {messages.header.line2}
        </p>
        <p className="font-body text-base text-white/70 leading-relaxed">
          {messages.header.line3}
        </p>
      </div>
    </HeaderWrapper>
  )
}
