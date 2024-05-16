"use client";
import { Bot } from "@/components/bot/bot";
import { BotProvider } from "@/providers/BotContext";

/**
 * Render the bot page
 * @return {JSX.Element} The bot page
 */
export default function BotPage() {
  return (
    <BotProvider>
      <Bot />
    </BotProvider>
  );
}
