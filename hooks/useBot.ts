"use client";
import { useContext } from "react";
import { BotContext } from "@/providers/BotContext";

/**
 * Use the bot context
 * @return {BotContextType} The bot context
 */
export function useBot() {
  const context = useContext(BotContext);

  return context;
}
