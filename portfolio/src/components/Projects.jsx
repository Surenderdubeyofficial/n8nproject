import React from "react";
import projects from "../data/projects.js";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold mb-6" data-aos="fade-up">Projects</h3>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <motion.div key={p.id} data-aos="fade-up" whileHover={{ scale: 1.02 }} className="glass rounded-lg overflow-hidden">
              <div className="md:flex">
                <img src={p.image} alt={p.title} className="w-full md:w-48 h-40 object-cover" />
                <div className="p-4 flex-1">
                  <h4 className="font-semibold text-lg">{p.title}</h4>
                  <p className="text-sm text-indigo-100/70 mt-2">{p.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tech.map((t, i) => <span key={i} className="text-xs px-2 py-1 bg-white/5 rounded">{t}</span>)}
                  </div>
                  <div className="mt-4 flex gap-2">
                    <a href={p.live} className="text-sm btn-primary glass px-3 py-2">Live</a>
                    <a href={p.repo} className="text-sm px-3 py-2 border border-white/10 rounded">Code</a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
