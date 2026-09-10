import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { to: "home", label: "Home" },
    { to: "about", label: "About" },
    { to: "projects", label: "Projects" },
    { to: "skills", label: "Skills" },
    { to: "contact", label: "Contact" },
  ];

  return (
    <header className="fixed w-full z-40 top-0">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#6EE7B7] to-[#3B82F6] flex items-center justify-center text-black font-bold">SD</div>
          <div className="text-lg font-semibold">Surender Dubey</div>
        </div>

        <nav className="hidden md:flex gap-6 items-center">
          {navLinks.map((l) => (
            <ScrollLink
              key={l.to}
              to={l.to}
              smooth
              duration={500}
              offset={-70}
              className="cursor-pointer text-sm hover:text-white/90"
            >
              {l.label}
            </ScrollLink>
          ))}
          <a href="/src/assets/resume.pdf" download className="ml-2 btn-primary glass px-4 py-2 text-sm">Download CV</a>
        </nav>

        <div className="md:hidden">
          <button onClick={() => setOpen((s) => !s)} className="p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ${open ? "max-h-52" : "max-h-0 overflow-hidden"}`}>
        <div className="px-4 pb-4 flex flex-col gap-3">
          {navLinks.map((l) => (
            <ScrollLink
              key={l.to}
              to={l.to}
              smooth
              duration={500}
              offset={-70}
              onClick={() => setOpen(false)}
              className="cursor-pointer py-2 border-b border-white/5"
            >
              {l.label}
            </ScrollLink>
          ))}
          <a href="/src/assets/resume.pdf" download className="mt-2 btn-primary glass px-4 py-2 text-sm w-full text-center">Download CV</a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
