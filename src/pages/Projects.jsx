import React, { useState } from "react";
import "./Projects.css";
import project1 from '../assets/anh2.gif'
import project2 from '../assets/anh3.gif'
import project3 from '../assets/anh4.gif'
import project4 from '../assets/anh5.gif'
import project5 from '../assets/anh1.gif'

import nuocmam1 from '../assets/nuocmam1.png'
import nuocmam2 from '../assets/nuocmam2.png'
import nuocmam3 from '../assets/nuocmam3.png'
import nuocmam4 from '../assets/nuocmam4.png'
import nuocmam5 from '../assets/nuocmam5.png'
import nuocmam6 from '../assets/nuocmam6.png'
import HeroImageGridModal from '../components/HeroImageGridModal';

const projectsData = [
  {
    title: "Showcasing Vietnam's Fish Sauce Heritage",
    type: "PowerPoint, AI",
    images: [nuocmam1, nuocmam2, nuocmam4, nuocmam5, nuocmam3, nuocmam6],
    description: "I supported a university student in completing a project to introduce and promote traditional Vietnamese fish sauce. Throughout the process, I helped with creating content, selecting images, designing the layout, and crafting a compelling narrative to highlight the product's authenticity and cultural value. The project was completed on time, successfully showcasing the essence of Vietnamese culinary culture, and earned an excellent grade of 9.3.",
    visit: "#",
    source: "#",
    download: "#"
  },
  {
    title: "NFT Collection",
    type: "PowerPoint",
    images: [project2, project3, project1],
    description: "A platform to showcase and trade NFT collections.",
    visit: "#",
    source: "#",
    download: "#"
  },
  {
    title: "Mobile App UI",
    type: "PowerPoint",
    images: [project3, project4, project2],
    description: "A modern mobile app interface design.",
    visit: "#",
    source: "#",
    download: "#"
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
              <p className="slide-type">{slideProject.type}</p>
              <p className="slide-desc">{slideProject.description}</p>
              <div className="slide-links">
                {slideProject.type.toLowerCase().includes("powerpoint") ? (
                  <>
                    <button className="slide-btn-main" onClick={() => openPopup(slideProject)}>Detail</button>
                    <a href={slideProject.download || '#'} target="_blank" rel="noopener noreferrer" className="slide-btn-secondary">Download</a>
                  </>
                ) : (
                  <>
                    <a href={slideProject.visit} target="_blank" rel="noopener noreferrer" className="slide-btn-main">Visit Page</a>
                    <a href={slideProject.source} target="_blank" rel="noopener noreferrer" className="slide-btn-secondary">Github</a>
                  </>
                )}
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
          <div className="project-card" key={idx} style={{cursor: 'pointer'}}>
            <img src={project.images[0]} alt={project.title} />
            <div className="project-info">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="project-links">
                {project.type.toLowerCase().includes("powerpoint") ? (
                  <>
                    <button onClick={() => openPopup(project)} className="slide-btn-main">Detail</button>
                    <a href={project.download || '#'} target="_blank" rel="noopener noreferrer" className="slide-btn-secondary">Download</a>
                  </>
                ) : (
                  <>
                    <a href={project.visit} target="_blank" rel="noopener noreferrer">Visit Page</a>
                    <a href={project.source} target="_blank" rel="noopener noreferrer">Source</a>
                  </>
                )}
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