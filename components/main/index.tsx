import { SocialButton } from '@/components/main/social-button'
import { getLinks } from '@/src/data/links'
import { getMessages, type Locale } from '@/src/i18n/messages'

/**
 * Show the main component.
 * @return {JSX.Element} The main CTA block.
 */
export function Main({ locale }: { locale: Locale }): JSX.Element {
  const messages = getMessages(locale)
  const linksConfig = getLinks(locale)
  const socialLinks = linksConfig.allLinks.filter((link) => link.social)
  const otherLinks = linksConfig.allLinks.filter((link) => !link.social)

  return (
    <div className="flex flex-col gap-8 text-center">
      <div className="space-y-4">
        <h2 className="font-display">{messages.main.contentCtaTitle}</h2>
        {otherLinks.map((link) => (
          <SocialButton key={link.title} {...link} />
        ))}
      </div>

      <div className="space-y-4">
        <h3 className="font-display text-white/80">
          {messages.main.socialCtaTitle}
        </h3>
        <div className="flex flex-row gap-2 justify-center">
          {socialLinks.map((link) => (
            <SocialButton key={link.title} {...link} />
          ))}
        </div>
      </div>
    </div>
  )
}
