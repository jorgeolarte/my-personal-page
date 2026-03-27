import { getMessages, type Locale } from '@/src/i18n/messages'

/**
 * Show the footer
 * @return {JSX.Element} The sum of the two numbers.
 */
export function Footer({ locale }: { locale: Locale }): JSX.Element {
  const messages = getMessages(locale)

  return (
    <div className="mt-10 pb-4 text-center">
      <p className="text-xs font-light">
        {messages.footer.developedBy}{' '}
        <span className="font-medium">Jorge Olarte</span>
      </p>
      <p className="text-xs font-light">
        {messages.footer.designedBy}{' '}
        <span className="font-medium">Jhony Espinosa</span>
      </p>
    </div>
  )
}
