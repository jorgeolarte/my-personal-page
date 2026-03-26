import type { Metadata } from 'next'
import BotPage from '@/components/bot'

export const metadata: Metadata = {
  title: 'Bot | Jorge Olarte',
  description: 'Asistente de IA para pedir taxis',
}

/**
 * Render the bot page
 * @return {JSX.Element} The bot page
 */
export default function Page() {
  return <BotPage />
}
