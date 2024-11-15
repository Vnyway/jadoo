import Destinations from "./components/Destinations";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import "./styles/main.scss";
import React from "react";

const App = () => {
  return (
    <React.Fragment className="page">
      <img
        src="./images/general/decore.png"
        alt="decore"
        className="background-image"
      />
      <Header />
      <main className="main__wrapper">
        <Hero />
        <Services />
        <Destinations />
      </main>
    </React.Fragment>
  );
};

export default App;
