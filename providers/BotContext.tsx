'use client'
import type { ChatRequestOptions, Message } from 'ai'
import { useChat } from 'ai/react'
import type React from 'react'
import { type ChangeEvent, createContext, type FormEvent } from 'react'

type BotContextType = {
  messages: Message[]
  input: string
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (
    e: FormEvent<HTMLFormElement>,
    chatRequestOptions?: ChatRequestOptions
  ) => void
  isLoading: boolean
}

const initialState: BotContextType = {
  messages: [],
  input: '',
  handleInputChange: () => {},
  handleSubmit: () => {},
  isLoading: false,
}

export const BotContext = createContext<BotContextType>(initialState)

/**
 * Bot provider
 * @param {ReactDOM} children - The children of the bot provider.
 * @return {ReactDOM} The bot provider.
 */
export function BotProvider({ children }: { children: React.ReactNode }) {
  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat()

  return (
    <BotContext.Provider
      value={{
        messages,
        input,
        handleInputChange,
        handleSubmit,
        isLoading,
      }}
    >
      {children}
    </BotContext.Provider>
  )
}
