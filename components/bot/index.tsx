"use client";
import { Bot } from "@/components/bot/bot";
import { BotProvider } from "@/providers/BotContext";
import { Navbar } from "@/components/ui/navbar";

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
  );
}
