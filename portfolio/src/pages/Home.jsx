import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="relative min-h-screen">
      {/* decorative blobs */}
      <div className="blob w-72 h-72 rounded-full bg-gradient-to-br from-[#6EE7B7] to-[#3B82F6] left-10 top-10"></div>
      <div className="blob w-56 h-56 rounded-full bg-gradient-to-br from-[#FDE68A] to-[#F472B6] right-10 bottom-10"></div>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
