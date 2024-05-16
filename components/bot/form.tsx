import { useBot } from "@/hooks/useBot";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

/**
 * Show the form.
 * @return {JSX.Element}
 */
export function Form() {
  const { input, handleInputChange, handleSubmit } = useBot();

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-row justify-center items-center gap-2"
    >
      <Input
        value={input}
        placeholder="¿How can I help you?"
        onChange={handleInputChange}
      />

      <Button variant="outline" type="submit">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="m14 10l-3 3m9.288-9.969a.535.535 0 0 1 .68.681l-5.924 16.93a.535.535 0 0 1-.994.04l-3.219-7.242a.534.534 0 0 0-.271-.271l-7.242-3.22a.535.535 0 0 1 .04-.993l16.93-5.925Z"
          />
        </svg>
      </Button>
    </form>
  );
}
