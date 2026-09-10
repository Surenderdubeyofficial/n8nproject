import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="section">
      <div className="max-w-6xl mx-auto">
        <motion.div data-aos="fade-up" className="grid md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold mb-3">About Me</h3>
            <p className="text-indigo-100/80">
              I'm a passionate Full Stack Developer with experience building user-centered web apps using React, Node.js, and modern web tools.
              I enjoy solving problems, writing maintainable code and learning new technologies.
            </p>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <div className="glass p-4 rounded-lg">
                <h4 className="font-semibold">Experience</h4>
                <p className="text-sm text-indigo-100/70 mt-2">2+ years building web applications</p>
              </div>
              <div className="glass p-4 rounded-lg">
                <h4 className="font-semibold">Education</h4>
                <p className="text-sm text-indigo-100/70 mt-2">BSc / Relevant Course</p>
              </div>
            </div>
          </div>

          <div className="glass rounded-lg p-6">
            <h4 className="font-semibold mb-3">Quick Info</h4>
            <ul className="text-sm space-y-2 text-indigo-100/70">
              <li><strong>Location:</strong> India</li>
              <li><strong>Email:</strong> your.email@example.com</li>
              <li><strong>Open to:</strong> Full-time / Internships</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
