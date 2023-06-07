import React from "react";
import Navbar from "./component/header/Navbar";
import Hero from "./component/hero/Hero";

import "./App.css";

const App = () => {
  return (
    <>
      <section className="container">
        <Navbar />
        <Hero />
      </section>
    </>
  );
};

export default App;
