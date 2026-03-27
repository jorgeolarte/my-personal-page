import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

/**
 * Container component that centers and constrains content width.
 * @param {ReactNode} children - The children of the container.
 * @return {JSX.Element} The container component.
 */
export function Container({ children }: Props): JSX.Element {
  return (
    <div className="flex flex-col justify-start items-center gap-12 min-h-screen max-w-lg mx-auto px-6 py-12">
      {children}
    </div>
  )
}
