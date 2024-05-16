import { useBot } from "@/hooks/useBot";
import { BubbleText } from "./bubble-text";
import { Hero } from "./hero";

/**
 * Show the messages.
 * @return {JSX.Element}
 */
export function Messages() {
  const { messages } = useBot();

  if (messages.length === 0) {
    return <Hero />;
  }

  return (
    <div className="bg-primary/40 backdrop-blur-2xl rounded-md">
      <div className="flex flex-col gap-4 p-4">
        {messages.map((m) => (
          <BubbleText key={m.id} role={m.role} content={m.content} />
        ))}
      </div>
    </div>
  );
}
