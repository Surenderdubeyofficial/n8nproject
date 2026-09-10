import React from "react";

const skills = [
  { name: "React", level: 90 },
  { name: "JavaScript", level: 88 },
  { name: "HTML & CSS", level: 92 },
  { name: "Node.js", level: 75 },
];

const SkillBar = ({ name, level }) => (
  <div className="mb-4">
    <div className="flex justify-between text-sm mb-1">
      <span>{name}</span>
      <span>{level}%</span>
    </div>
    <div className="w-full h-2 bg-white/6 rounded">
      <div className="h-2 rounded" style={{ width: `${level}%`, background: "linear-gradient(90deg,#6EE7B7,#3B82F6)" }} />
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold mb-6" data-aos="fade-up">Skills</h3>
        <div data-aos="fade-up" className="grid md:grid-cols-2 gap-6">
          <div className="glass p-6 rounded-lg">
            <h4 className="font-semibold mb-4">Technical Skills</h4>
            {skills.map((s) => <SkillBar key={s.name} {...s} />)}
          </div>
          <div className="glass p-6 rounded-lg">
            <h4 className="font-semibold mb-4">Tools & Platforms</h4>
            <ul className="grid grid-cols-2 gap-2 text-sm text-indigo-100/80">
              <li>Git</li>
              <li>VS Code</li>
              <li>Tailwind</li>
              <li>MongoDB</li>
              <li>Figma</li>
              <li>Netlify</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
