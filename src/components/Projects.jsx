import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'World capital Quize',
    description: 'world capital game to test your knowladge',
    tech: 'EJS • Node.js • Express ',
    link: 'https://socialsphere.vercel.app'
  },
  {
    title: 'Book Sphere',
    description: 'An online platform to explore and sell books, built with MERN stack.',
    tech: 'MongoDB • Express • React • Node.js',
    link: 'https://book-sphere-frontend.vercel.app'
  },
  {
    title: 'Weatherly',
    description: 'A dynamic and premium weather app with real-time data and beautiful UI.',
    tech: 'HTML • API • CSS • JavaScript ',
    link: 'https://weather90.vercel.app'
  },
  {
    title: 'cloud file saver',
    description: 'My personal responsive portfolio with animations, project showcase, and downloadable resume.',
    tech: 'HTML • CSS • JavaScript • AWS(S3)',
    link: 'https://a-upload.vercel.app'
  },
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <span>{project.tech}</span>
            <a href={project.link} target="_blank" rel="noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
