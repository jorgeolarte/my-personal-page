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
    <div className="flex flex-col justify-start items-center gap-4 h-screen max-h-min max-w-md mx-auto px-4">
      {children}
    </div>
  )
}
