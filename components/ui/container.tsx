import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

/**
 * Show the container.
 * @param {ReactNode} children - The children of the container.
 * @return {JSX.Element} The sum of the two numbers.
 */
export function Container({ children }: Props): JSX.Element {
  return (
    <div className="flex flex-col justify-start items-center gap-12 min-h-screen max-w-lg mx-auto px-6 py-12">
      {children}
    </div>
  )
}
