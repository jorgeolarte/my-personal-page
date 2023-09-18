type Props = {
  children: JSX.Element;
};

export default function Container({ children }: Props) {
  return (
    <div className="flex flex-col pt-14 pb-4 justify-around items-center gap-4 text-center">
      {children}
    </div>
  );
}
