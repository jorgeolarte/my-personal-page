/**
 * Show a default message when the user is not started the conversation.
 * @return {JSX.Element}
 */
export function Hero() {
  return (
    <div className="flex-1 bg-primary/40 backdrop-blur-2xl rounded-md">
      <div className="flex flex-col gap-4 p-4 h-full justify-center">
        <h1>Hola 🤘</h1>
        <p>
          Soy un bot de inteligencia artificial programado para ayudarte a pedir
          un taxi.
        </p>
        <p className="italic text-xs">
          * Esto es un servicio de prueba, no se pedirá ningún taxi.
        </p>
      </div>
    </div>
  );
}
