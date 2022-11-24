export default function Links() {
  const List = [
    {
      id: 1,
      name: "Whatsapp",
      link: "https://wa.me/573017516045",
      icon: "whatsapp.svg",
    },
    {
      id: 2,
      name: "Linkedin",
      link: "https://www.linkedin.com/in/jorgeduardolarte/",
      icon: "linkedin.svg",
    },
    {
      id: 4,
      name: "Github",
      link: "https://github.com/jorgeolarte",
      icon: "github.svg",
    },
    {
      id: 3,
      name: "Gmail",
      link: "mailto:me@jorgeolarte.com",
      icon: "email.svg",
    },
  ];

  return (
    <div className="flex flex-col gap-6 mt-10 md:mt-7">
      {List.map((item) => (
        <a
          key={item.id}
          className="relative flex flex-row justify-center items-center"
          href={item.link}
          target="_blank"
          rel="noreferrer"
        >
          <div className="absolute backdrop-blur-2xl bg-gray/40 hover:bg-black rounded-xl w-full h-9"></div>

          <div className="flex flex-row justify-center items-center gap-2 z-10">
            <img src={item.icon} alt={item.name} className="fill-magenta" />

            <div className="hover:btn-text">{item.name}</div>
          </div>
        </a>
      ))}
    </div>
  );
}
