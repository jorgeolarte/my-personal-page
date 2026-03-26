'use client'
import { Form } from '@/components/bot/form'
import { Messages } from '@/components/bot/messages'

/**
 * Show the bot component.
 * @return {JSX.Element}
 */
export function Bot() {
  return (
    <div className="flex flex-col justify-between items-stretch h-screen w-full pb-4 gap-4">
      <Messages />

      <Form />
    </div>
  )
}
