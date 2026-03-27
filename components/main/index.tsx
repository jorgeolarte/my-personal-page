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
    <div className="flex flex-col gap-12 text-center w-full">
      <div className="space-y-5">
        <h2 className="font-display mb-2">{messages.main.contentCtaTitle}</h2>
        <div className="space-y-3">
          {otherLinks.map((link, index) => (
            <SocialButton
              key={link.title}
              {...link}
              variant={index === 0 ? 'primary' : 'secondary'}
              isPrimary={index === 0}
            />
          ))}
        </div>
      </div>

      <div className="space-y-5">
        <h3 className="font-display text-white/80">
          {messages.main.socialCtaTitle}
        </h3>
        <div className="flex flex-row gap-3 justify-center flex-wrap">
          {socialLinks.map((link) => (
            <SocialButton key={link.title} {...link} variant="ghost" />
          ))}
        </div>
      </div>
    </div>
  )
}
