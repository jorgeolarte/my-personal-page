type Props = {
  role: string;
  content: string;
};

/**
 * Show the bubble text.
 * @param {string} role - The role of the bubble text.
 * @param {string} content - The content of the bubble text.
 * @return {JSX.Element} The bubble text.
 */
export function BubbleText({ role, content }: Props) {
  return (
    <div className="flex flex-row gap-2">
      <div className="flex justify-center items-start">
        <div className="p-2 bg-violet rounded-full">
          {role === "user" && "😀"}
          {role !== "user" && "🤖"}
        </div>
      </div>
      <div className="flex-1">
        <p className="font-bold">{role === "user" ? "User: " : "AI: "}</p>
        <p>{content}</p>
      </div>
    </div>
  );
}
