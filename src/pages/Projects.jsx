import React, { useState } from "react";
import "./Projects.css";

const projectsData = [
  {
    title: "The Cities Within",
    type: "Game",
    image: "https://gamelade.vn/wp-content/uploads/2024/12/spirited_away.webp",
    description: "An action role playing demo game. Embark on an epic journey and build your own city, utilizing electric power. Explore a vast world, recruit new agents, and build your own city. Each agent has their own unique abilities, and you might need to solve puzzles, defeat enemies, and gather resources.",
    visit: "#",
    source: "#"
  },
  {
    title: "NFT Collection",
    type: "Software",
    image: "https://gamelade.vn/wp-content/uploads/2024/12/spirited_away.webp",
    description: "A platform to showcase and trade NFT collections.",
    visit: "#",
    source: "#"
  },
  {
    title: "Mobile App UI",
    type: "Mobile",
    image: "https://gamelade.vn/wp-content/uploads/2024/12/spirited_away.webp",
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
        <button className="slide-btn left" onClick={handlePrev}>&lt;</button>
        <div className="slide-content">
          <div className="slide-info">
            <h2>{slideProject.title}</h2>
            <p className="slide-type">{slideProject.type}</p>
            <p className="slide-desc">{slideProject.description}</p>
            <div className="slide-links">
              <a href={slideProject.visit} target="_blank" rel="noopener noreferrer">Visit Page</a>
              <a href={slideProject.source} target="_blank" rel="noopener noreferrer">Source</a>
            </div>
          </div>
          <div className="slide-image">
            <img src={slideProject.image} alt={slideProject.title} />
          </div>
        </div>
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