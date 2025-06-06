import React, { useState, useEffect } from "react";
import Navbar from "./src/components/Navbar";
import Home from "./src/components/Home";
import About from "./src/components/About";
import Plans from "./src/components/Plans";
import Trainers from "./src/components/Trainers";
import Contact from "./src/components/Contact";
import Footer from "./src/components/Footer";
import BarLoader from "./src/components/BarLoader";
import "./App.css";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading && <BarLoader />}
      <Navbar />

      <main>
        <section id="home">
          <Home />
        </section>

        <section id="about">
          <About />
        </section>
        <section id="plans">
          <Plans />
        </section>

        <section id="trainers">
          <Trainers />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
