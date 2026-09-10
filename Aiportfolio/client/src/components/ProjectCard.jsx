import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">

      <img
        src={project.image}
        alt={project.title}
      />

      <h2>{project.title}</h2>

      <p>{project.description}</p>

      <h3>Technologies</h3>

      <ul>
        {project.technologies.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>

      <p>
        <strong>GitHub: </strong>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Code
        </a>
      </p>

      <p>
        <strong>Live Demo: </strong>

        <a
          href={project.liveDemo}
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Website
        </a>
      </p>

      {project.featured && (
        <p>⭐ Featured Project</p>
      )}

    </div>
  );
};

export default ProjectCard;