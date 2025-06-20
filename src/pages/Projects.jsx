import React, { useState } from "react";
import "./Projects.css";
import project1 from '../assets/anh2.gif'
import project2 from '../assets/anh3.gif'
import project3 from '../assets/anh4.gif'
import project4 from '../assets/anh5.gif'
import project5 from '../assets/anh1.gif'
import HeroImageGridModal from '../components/HeroImageGridModal';

const projectsData = [
  {
    title: "The Cities Within",
    type: "PowerPoint",
    images: [project1, project2, project2, project4],
    description: "An action role playing demo game. Embark on an epic journey and build your own city, utilizing electric power. Explore a vast world, recruit new agents, and build your own city. Each agent has their own unique abilities, and you might need to solve puzzles, defeat enemies, and gather resources.",
    visit: "#",
    source: "#"
  },
  {
    title: "NFT Collection",
    type: "PowerPoint",
    images: [project2, project3, project1],
    description: "A platform to showcase and trade NFT collections.",
    visit: "#",
    source: "#"
  },
  {
    title: "Mobile App UI",
    type: "PowerPoint",
    images: [project3, project4, project2],
    description: "A modern mobile app interface design.",
    visit: "#",
    source: "#"
  },
  {
    title: "Login System",
    type: "website",
    images: [project4, project1, project5],
    description: "A secure login and authentication system.",
    visit: "#",
    source: "#"
  }
];

const filters = ["All", "PowerPoint", "website", "Game"];

const Projects = () => {
  const [selected, setSelected] = useState("All");
  const [slideIdx, setSlideIdx] = useState(0);
  const [popupProject, setPopupProject] = useState(null);
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

  // Popup handlers
  const openPopup = (project) => setPopupProject(project);
  const closePopup = () => setPopupProject(null);

  return (
    <div className="projects-page">
      <div className="projects-title-section">
        <h1>PROJECTS</h1>
        <p className="subtitle">A Collection of My Recent Works</p>
      </div>
      {/* Slide section */}
      <div style={{position: 'relative'}}>
        <div className="slide-nav-bar" style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 32, marginBottom: 16, position: 'absolute', top: -50, right: 0, zIndex: 3, width: '100%'}}>
          <button className="slide-btn nav-btn" onClick={handlePrev}>{'<'}</button>
          <span className="slide-nav-label">project slide</span>
          <button className="slide-btn nav-btn" onClick={handleNext}>{'>'}</button>
        </div>
        <div className="project-slide" style={{marginTop: '48px'}}>
          <div className="slide-content-wrapper">
            <div className="slide-image">
              <img src={slideProject.images[0]} alt={slideProject.title} />
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
        </div>
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
          <div className="project-card" key={idx} onClick={() => openPopup(project)} style={{cursor: 'pointer'}}>
            <img src={project.images[0]} alt={project.title} />
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
      {/* Popup modal */}
      {popupProject && (
        <HeroImageGridModal
          images={popupProject.images}
          title={popupProject.title}
          description={popupProject.description}
          onClose={closePopup}
        />
      )}
    </div>
  );
};

export default Projects; 