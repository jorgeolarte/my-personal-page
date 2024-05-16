type Props = {
  children: JSX.Element;
};

/**
 * Show the container.
 * @param {JSX.Element} children - The children of the container.
 * @return {JSX.Element} The sum of the two numbers.
 */
export function Container({ children }: Props): JSX.Element {
  return (
    <div className="flex flex-col justify-around items-center gap-4 h-screen max-h-min max-w-md mx-auto">
      {children}
    </div>
  );
}
