import React from "react";
import ProjectCard from "../components/ProjectCard";

const Project = () => {
  const projects = [
    {
      id: 1,
      title: "Developer Portfolio",
      description: "A modern responsive portfolio website.",
      technologies: ["React.js", "React Router", "CSS3", "JavaScript"],
      github: "https://github.com/yourusername/developer-portfolio",
      liveDemo: "https://yourportfolio.vercel.app",
      image: "/images/portfolio.png",
      featured: true,
    },
    {
      id: 2,
      title: "AI Chat Application",
      description: "AI-powered chat application.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "OpenAI API",
      ],
      github: "https://github.com/yourusername/ai-chat-app",
      liveDemo: "https://ai-chat.vercel.app",
      image: "/images/aichat.png",
      featured: true,
    },
    {
      id: 3,
      title: "Task Management System",
      description: "Task management application.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
      ],
      github: "https://github.com/yourusername/task-manager",
      liveDemo: "https://task-manager.vercel.app",
      image: "/images/taskmanager.png",
      featured: false,
    },
  ];

  return (
    <section>
      <h1>My Projects</h1>

      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
        />
      ))}
    </section>
  );
};

export default Project;