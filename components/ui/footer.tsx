import { getMessages, type Locale } from '@/src/i18n/messages'

/**
 * Show the footer
 * @return {JSX.Element} The sum of the two numbers.
 */
export function Footer({ locale }: { locale: Locale }): JSX.Element {
  const messages = getMessages(locale)

  return (
    <div className="mt-10 pb-4 text-center space-y-1">
      <p className="font-body text-sm text-white/50">
        {messages.footer.developedBy}{' '}
        <span className="text-white/70 font-medium">Jorge Olarte</span>
      </p>
      <p className="font-body text-sm text-white/50">
        {messages.footer.designedBy}{' '}
        <span className="text-white/70 font-medium">Jhony Espinosa</span>
      </p>
    </div>
  )
}
