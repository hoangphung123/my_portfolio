import React, { useState, useMemo } from "react";
import "./Projects.css";
import { projectsData, getProjectsByType, getFeaturedProjects } from '../data/projects';
import LazyImage from '../components/LazyImage';
import HeroImageGridModal from '../components/HeroImageGridModal';
import { trackProjectView, trackProjectDownload, trackProjectVisit, trackFilterUsage } from '../components/Analytics';

const filters = ["All", "PowerPoint", "website", "Game"];

const Projects = () => {
  const [selected, setSelected] = useState("All");
  const [slideIdx, setSlideIdx] = useState(0);
  const [popupProject, setPopupProject] = useState(null);
  
  // Use useMemo for better performance
  const filteredProjects = useMemo(() => {
    return getProjectsByType(selected);
  }, [selected]);

  const featuredProjects = useMemo(() => {
    return getFeaturedProjects();
  }, []);

  // Slide handlers
  const handlePrev = () => {
    setSlideIdx((prev) => (prev === 0 ? featuredProjects.length - 1 : prev - 1));
  };
  
  const handleNext = () => {
    setSlideIdx((prev) => (prev === featuredProjects.length - 1 ? 0 : prev + 1));
  };
  
  const slideProject = featuredProjects[slideIdx];

  // Popup handlers
  const openPopup = (project) => {
    setPopupProject(project);
    trackProjectView(project.title);
  };
  
  const closePopup = () => setPopupProject(null);

  // Filter handler with tracking
  const handleFilterChange = (filterType) => {
    setSelected(filterType);
    trackFilterUsage(filterType);
  };

  // Download handler with tracking
  const handleDownload = (project) => {
    trackProjectDownload(project.title);
  };

  // Visit handler with tracking
  const handleVisit = (project) => {
    trackProjectVisit(project.title, project.visit);
  };

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
              <LazyImage 
                src={slideProject?.images[0]} 
                alt={slideProject?.title} 
                className="slide-main-image"
              />
            </div>
            <div className="slide-info">
              <h2 className="slide-title">{slideProject?.title}</h2>
              <p className="slide-type">{slideProject?.type}</p>
              <p className="slide-desc">{slideProject?.description}</p>
              <div className="slide-links">
                {slideProject?.type.toLowerCase().includes("powerpoint") ? (
                  <>
                    <button className="slide-btn-main" onClick={() => openPopup(slideProject)}>Detail</button>
                    <a 
                      href={slideProject?.download || '#'} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="slide-btn-secondary"
                      onClick={() => handleDownload(slideProject)}
                    >
                      Download
                    </a>
                  </>
                ) : (
                  <>
                    <a 
                      href={slideProject?.visit} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="slide-btn-main"
                      onClick={() => handleVisit(slideProject)}
                    >
                      Visit Page
                    </a>
                    <a href={slideProject?.source} target="_blank" rel="noopener noreferrer" className="slide-btn-secondary">Github</a>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Filters */}
      <div className="projects-filters">
        {filters.map((f) => (
          <button
            key={f}
            className={selected === f ? "active" : ""}
            onClick={() => handleFilterChange(f)}
          >
            {f}
          </button>
        ))}
      </div>
      
      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div className="project-card" key={project.id} style={{cursor: 'pointer'}}>
            <LazyImage 
              src={project.images[0]} 
              alt={project.title} 
              className="project-image"
            />
            <div className="project-info">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="project-links">
                {project.type.toLowerCase().includes("powerpoint") ? (
                  <>
                    <button onClick={() => openPopup(project)} className="slide-btn-main">Detail</button>
                    <a 
                      href={project.download || '#'} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="slide-btn-secondary"
                      onClick={() => handleDownload(project)}
                    >
                      Download
                    </a>
                  </>
                ) : (
                  <>
                    <a 
                      href={project.visit} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={() => handleVisit(project)}
                    >
                      Visit Page
                    </a>
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