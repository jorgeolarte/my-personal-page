import type { ReactNode } from 'react'

type HeaderWrapperProps = {
  children: ReactNode
}

/**
 * Wrapper component for header content with consistent spacing.
 * @param {ReactNode} children - The children of the header.
 * @return {JSX.Element} The header wrapper component.
 */
export function HeaderWrapper({ children }: HeaderWrapperProps): JSX.Element {
  return <div className="flex flex-col gap-8 text-center">{children}</div>
}
