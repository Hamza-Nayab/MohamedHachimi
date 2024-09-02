import React from "react";
import "./home.css";
import Hero from "../Hero/Hero";
import About from "../About/About";
import MasterCard from "../MasterCard/MasterCard";
import Benefits from "../Benefits/Benefits";
import Projects from "../Projects/Projects";
import Visa from "../Visa/Visa";
import Contact from "../Contact/Contact";
import Contactme from "../ContactMe/Contactme";

function Home() {
  return (
    <div className="Home-Container">
      <Hero />
      <About />
      <MasterCard />
      <Benefits />
      <Projects />
      <Visa />
      <Contactme />
      <Contact />
    </div>
  );
}

export default Home;
