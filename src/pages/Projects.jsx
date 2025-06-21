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

import IT1 from '../assets/IT1.png'
import IT2 from '../assets/IT2.png'
import IT3 from '../assets/IT3.png'
import IT4 from '../assets/IT4.png'
import IT5 from '../assets/IT5.png'

import Tamcam1 from '../assets/tamcam1.png'
import Tamcam2 from '../assets/Tamcam2.png'
import Tamcam3 from '../assets/Tamcam3.png'
import Tamcam4 from '../assets/Tamcam4.png'
import Tamcam5 from '../assets/Tamcam5.png'

import HeroImageGridModal from '../components/HeroImageGridModal';

const projectsData = [
  {
    title: "Showcasing Vietnam's Fish Sauce Heritage",
    type: "PowerPoint",
    images: [project1, nuocmam1, nuocmam2, nuocmam4, nuocmam5, nuocmam3, nuocmam6],
    description: "I supported a university student in completing a project to introduce and promote traditional Vietnamese fish sauce. Throughout the process, I helped with creating content, selecting images, designing the layout, and crafting a compelling narrative to highlight the product's authenticity and cultural value. The project was completed on time, successfully showcasing the essence of Vietnamese culinary culture, and earned an excellent grade of 9.3.",
    visit: "#",
    source: "#",
    download: "https://docs.google.com/presentation/d/1iKEiodwzTL9QxjlcyFCXGdn1muBypbdY/edit?usp=drive_link&ouid=111817752097991923945&rtpof=true&sd=true"
  },
  {
    title: "Object-Oriented Software Engineering",
    type: "PowerPoint",
    images: [project2, IT1, IT2, IT3, IT4, IT5],
    description: "This was a PowerPoint created for a group project in the OOSE course of the IT program. I chose the computer screen as the central design concept, making the visual style highly relevant to the presentation’s content. The bold, rectangular layout conveys a sense of logic and formality, reinforcing the structured and professional tone of the presentation.",
    visit: "#",
    source: "#",
    download: "https://docs.google.com/presentation/d/1283ltxkzgEFlzvWnmHla4pSUyEfMZqKE/edit?usp=drive_link&ouid=111817752097991923945&rtpof=true&sd=true"
  },
  {
    title: "Analysis of Tấm Cám",
    type: "PowerPoint",
    images: [project3, Tamcam1, Tamcam2, Tamcam3, Tamcam4, Tamcam5],
    description: "Tấm Cám’ was a PowerPoint I created for a literary analysis course at university. The slides emphasize traditional Vietnamese elements, featuring iconic images like áo dài, lotus flowers, and traditional women. I incorporated smooth shapes, elegant lines, and a distinctive color palette to evoke a sense of cultural authenticity. The presentation left a strong impression on the audience and made the literary analysis session much more engaging and enjoyable.",
    visit: "#",
    source: "#",
    download: "https://docs.google.com/presentation/d/11n6m4-9xdD5gj09ZNopvEwnD_yGSfkdC/edit?usp=drive_link&ouid=111817752097991923945&rtpof=true&sd=true"
  },
  {
    title: "Login System",
    type: "website",
    images: [project4, project1, project5],
    description: "A secure login and authentication system.",
    visit: "https://future.kouiki-kansai.jp/",
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