type Props = {
  children: JSX.Element;
};

/**
 * Show the container.
 * @param {JSX.Element} children - The children of the container.
 * @return {JSX.Element} The sum of the two numbers.
 */
export default function Container({ children }: Props): JSX.Element {
  return (
    <div className="flex flex-col pt-14 pb-4 justify-around items-center gap-4 text-center">
      {children}
    </div>
  );
}
