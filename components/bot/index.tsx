'use client'
import { Bot } from '@/components/bot/bot'
import { Navbar } from '@/components/ui/navbar'
import { BotProvider } from '@/providers/BotContext'

/**
 * Render the bot page
 * @return {JSX.Element} The bot page
 */
export default function BotPage() {
  return (
    <BotProvider>
      <Navbar />
      <Bot />
    </BotProvider>
  )
}
