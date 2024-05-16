type HeaderWrapperProps = {
  children: JSX.Element;
};

/**
 * Show the header.
 * @param {JSX.Element} children - The children of the header.
 * @return {JSX.Element} The sum of the two numbers.
 */
export function HeaderWrapper({ children }: HeaderWrapperProps): JSX.Element {
  return (
    <div className="flex flex-col pt-14 gap-6 mb-4 text-center">{children}</div>
  );
}
