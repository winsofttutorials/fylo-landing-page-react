import React from "react";
import Navbar from "./component/header/Navbar";
import Hero from "./component/hero/Hero";
import "./App.css";
import Productive from "./component/productivity/Productive";
import GetStarted from "./component/getStarted/GetStarted";
import Footer from "./component/footer/Footer";

const App = () => {
  return (
    <>
      <section className="container">
        <Navbar />
        <Hero />
      </section>
      <Productive />
      <GetStarted />
      <Footer />
    </>
  );
};

export default App;
