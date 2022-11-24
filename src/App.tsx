import { useEffect } from "react";
import { Background } from "./components/background/";
import { Container } from "./components/container/";
import { Header } from "./components/header";
import { Main } from "./components/main";
import { Footer } from "./components/footer";

function App() {
  useEffect(() => {
    document.title = "Jorge Olarte | Web Developer";
    let description = document.querySelector('meta[name="description"]');
    description?.setAttribute("content", "Following my heart ❤️ since I was born")
  }, []);

  return (
    <div className="text-white">
      <Background></Background>
      <Container>
        <>
          <Header />
          <Main />
          <Footer />
        </>
      </Container>
    </div>
  );
}

export default App;
