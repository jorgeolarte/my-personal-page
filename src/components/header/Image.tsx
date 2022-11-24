export default function Image() {
  return (
    <div className="flex flex-col gap-8 items-center">
      <div className="relative">
        <div className="relative">
          <div className="absolute -z-10 w-32 h-32 md:w-44 md:h-44 bg-linear-gradient from-magenta to-violet animate-rotate rounded-full blur-xl"></div>
          <img
            src="jorge-olarte.jpg"
            className="w-32 md:w-44 rounded-full"
            alt="Jorge Olarte"
          />
        </div>
        <div className="absolute bottom-1 right-1 md:bottom-2 md:right-2 animate-pulse">
          <img
            src="logo-color.png"
            alt="Following my heart"
            className="w-7 md:w-9 rounded-full"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h1>Jorge Olarte</h1>
        <span className="subtitle">Software Developer</span>
      </div>
    </div>
  );
}
