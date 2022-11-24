import { Background } from "./components/background/";
import { Container } from "./components/container/";
import { Header } from "./components/header";
import { Main } from "./components/main";
import { Footer } from "./components/footer";

function App() {
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
