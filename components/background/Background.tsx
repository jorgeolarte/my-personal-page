/**
 * Show a background with a gradient
 * @return {JSX.Element} The sum of the two numbers.
 */
export default function Background(): JSX.Element {
  return (
    <div className="fixed w-full -z-10 bg-black text-white">
      <div className="flex flex-col md:flex-row justify-between items-center h-screen animate-rotate ">
        <div className="w-1/2 h-1/2 bg-radial-gradient from-violet via-transparent to-transparent rounded-full blur-3xl "></div>
        <div className="w-1/2 h-1/2 bg-radial-gradient from-magenta via-transparent to-transparent rounded-full blur-3xl"></div>
      </div>
    </div>
  );
}
