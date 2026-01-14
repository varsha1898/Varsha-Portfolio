import React from "react";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Work from "../components/Work";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <>
      <HeroSection />
      <About />
      <Skills />
      <Projects />
      <Work />
      <Contact />
    </>
  );
};

export default Home;
