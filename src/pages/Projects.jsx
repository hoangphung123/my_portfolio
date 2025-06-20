import React, { useState } from "react";
import "./Projects.css";
import project1 from '../assets/anh2.gif'
import project2 from '../assets/anh3.gif'
import project3 from '../assets/anh4.gif'

const projectsData = [
  {
    title: "The Cities Within",
    type: "Game",
    image: project1,
    description: "An action role playing demo game. Embark on an epic journey and build your own city, utilizing electric power. Explore a vast world, recruit new agents, and build your own city. Each agent has their own unique abilities, and you might need to solve puzzles, defeat enemies, and gather resources.",
    visit: "#",
    source: "#"
  },
  {
    title: "NFT Collection",
    type: "Software",
    image: project2,
    description: "A platform to showcase and trade NFT collections.",
    visit: "#",
    source: "#"
  },
  {
    title: "Mobile App UI",
    type: "Mobile",
    image: project3,
    description: "A modern mobile app interface design.",
    visit: "#",
    source: "#"
  },
  {
    title: "Login System",
    type: "Software",
    image: "https://gamelade.vn/wp-content/uploads/2024/12/spirited_away.webp",
    description: "A secure login and authentication system.",
    visit: "#",
    source: "#"
  }
];

const filters = ["All", "Mobile", "Software", "Game"];

const Projects = () => {
  const [selected, setSelected] = useState("All");
  const [slideIdx, setSlideIdx] = useState(0);
  const filteredProjects =
    selected === "All"
      ? projectsData
      : projectsData.filter((p) => p.type === selected);

  // Slide handlers
  const handlePrev = () => {
    setSlideIdx((prev) => (prev === 0 ? projectsData.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setSlideIdx((prev) => (prev === projectsData.length - 1 ? 0 : prev + 1));
  };
  const slideProject = projectsData[slideIdx];

  return (
    <div className="projects-page">
      <div className="projects-title-section">
        <h1>PROJECTS</h1>
        <p className="subtitle">A Collection of My Recent Works</p>
      </div>
      {/* Slide section */}
      <div className="project-slide">
        <div className="slide-content-wrapper">
          <div className="slide-image">
            <img src={slideProject.image} alt={slideProject.title} />
          </div>
          <div className="slide-info">
            <h2 className="slide-title">{slideProject.title}</h2>
            <p className="slide-type">{slideProject.type} Tracking Software</p>
            <p className="slide-desc">{slideProject.description}</p>
            <div className="slide-links">
              <a href={slideProject.visit} target="_blank" rel="noopener noreferrer" className="slide-btn-main">Visit Page</a>
              <a href={slideProject.source} target="_blank" rel="noopener noreferrer" className="slide-btn-secondary">Github</a>
            </div>
          </div>
        </div>
        <button className="slide-btn left" onClick={handlePrev}>&lt;</button>
        <button className="slide-btn right" onClick={handleNext}>&gt;</button>
      </div>
      {/* End slide section */}
      <div className="projects-filters">
        {filters.map((f) => (
          <button
            key={f}
            className={selected === f ? "active" : ""}
            onClick={() => setSelected(f)}
          >
            {f}
          </button>
        ))}
      </div>
      <div className="projects-grid">
        {filteredProjects.map((project, idx) => (
          <div className="project-card" key={idx}>
            <img src={project.image} alt={project.title} />
            <div className="project-info">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="project-links">
                <a href={project.visit} target="_blank" rel="noopener noreferrer">Visit Page</a>
                <a href={project.source} target="_blank" rel="noopener noreferrer">Source</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects; 