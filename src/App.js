import Destinations from "./components/Destinations";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import "./styles/main.scss";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Destinations />
      </main>
    </>
  );
};

export default App;
