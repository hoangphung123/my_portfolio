import './Home.css';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <main className="main-content">
      <section className="hero">
        <div className="corner-border top"></div>
        <div className="corner-border left"></div>
        <div className="corner-border bottom"></div>
        <div className="corner-border right"></div>
        <div class="container">
          <div class="content">
            <svg viewBox="0 0 1500 500" data-aos="fade-down">
              <text x="50%" y="50%" text-anchor="middle">HUY HOANG</text>
            </svg>
            <h1 data-aos="zoom-in-up">
              Frontend Development & PowerPoint Design <span>Professional</span>
            </h1>
            <Link to="/projects" style={{ textDecoration: 'none' }}>
              <button data-aos="zoom-out"><span>Show my Work</span></button>
            </Link>
          </div>
        </div>
      </section>
    </main >
  );
};

export default Home; 