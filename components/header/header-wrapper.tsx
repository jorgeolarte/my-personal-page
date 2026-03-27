import type { ReactNode } from 'react'

type HeaderWrapperProps = {
  children: ReactNode
}

/**
 * Show the header.
 * @param {ReactNode} children - The children of the header.
 * @return {JSX.Element} The sum of the two numbers.
 */
export function HeaderWrapper({ children }: HeaderWrapperProps): JSX.Element {
  return <div className="flex flex-col gap-8 text-center">{children}</div>
}
