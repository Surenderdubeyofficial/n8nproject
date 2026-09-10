import React from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="section min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div data-aos="fade-right">
          <h2 className="text-lg text-indigo-300/80">Hi, my name is</h2>
          <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }} className="text-4xl md:text-6xl font-extrabold leading-tight mt-2">
            Surender Dubey
          </motion.h1>

          <div className="mt-4 text-xl md:text-2xl text-indigo-50/90">
            <Typewriter
              options={{
                strings: ["Full Stack Developer", "React & JavaScript Enthusiast", "Building beautiful UIs"],
                autoStart: true,
                loop: true,
                delay: 50,
              }}
            />
          </div>

          <p className="mt-6 max-w-xl text-indigo-100/70">
            I build modern, responsive web applications using React, Tailwind CSS and Node.js. I love clean code and beautiful interfaces that provide great user experience.
          </p>

          <div className="mt-6 flex gap-3">
            <a href="/src/assets/resume.pdf" download className="btn-primary glass px-5 py-3">Download Resume</a>
            <a href="#projects" className="btn-primary px-5 py-3 border border-white/10">View Projects</a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <motion.div data-aos="zoom-in" className="glass rounded-2xl p-4 w-72 h-72 flex items-center justify-center shadow-xl"
            initial={{ scale: 0.95, opacity: 0.6 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img src="/src/assets/profile.jpg" alt="profile" className="w-64 h-64 object-cover rounded-full border-4 border-white/6" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
