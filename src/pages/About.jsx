import Navbar from '../components/Navbar';
import DustBackground from '../components/DustBackground';
import './About.css';
import React, { useState, useRef } from 'react';


const skills = [
  {
    title: 'Software & Website Development',
    desc: 'I specialize in developing dynamic, responsive, and secure web applications using modern technologies.',
    icons: [
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', alt: 'HTML5' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', alt: 'CSS3' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', alt: 'JavaScript' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', alt: 'React' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', alt: 'NodeJS' },
    ],
  },
  {
    title: 'UI/UX & Graphic Design',
    desc: 'I enjoy creating clean and user friendly interfaces, combining creativity and usability to deliver great user experiences.',
    icons: [
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg', alt: 'Photoshop' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg', alt: 'Adobe XD' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', alt: 'Figma' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg', alt: 'Canva' },
    ],
    tools: true,
  },
];

const educations = [
  {
    logo: 'https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/482009044_631623413063121_7724380613014001949_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeF0KK1wlWr1ndVg2NuyeVyLzIrAmpbBL7bMisCalsEvtmJ-8N6VEd_GgMKWLUvuFzJbDdlyThFXcz2lY3Qg7v8d&_nc_ohc=K-PsUNo67NMQ7kNvwHUx3mr&_nc_oc=AdnaCVtDsS8-Yuvd41Pp_PUHEPpTR2RMetkxGX8sTdCORqrcjZkZf2AmiJIm-PVTbyQ&_nc_zt=23&_nc_ht=scontent.fsgn2-4.fna&_nc_gid=74JoVwnSkF3vlnVSp-gszw&oh=00_AfMhLJOBi4q3TUjr7JuLmKEHOWKUGdTAsH2ey4bCTywVOA&oe=6859C3B8',
    name: 'Southern Philippines Baptist Theological Seminary',
    level: 'High School Level',
    desc: "SFBTS is dedicated to teaching God's Word, equipping God's servants, and sending God's workers. My alma mater, a private educational institution located in Puerto Princesa City, was established through the inspiration and vision of a dedicated missionary who recognized the spiritual needs of the city's children of God.",
    year: '2015 - 2021',
  },
  {
    logo: 'https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/508828613_2169721100131558_2860552920310533796_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeF3NKoW5FqapcTKDRM87cTS5BnLy_o_4_rkGcvL-j_j-gFg--Kj-bseAPLl6jLlStE2WXdyl01hB1GK6mzX9-6S&_nc_ohc=IrgCe-enfDsQ7kNvwHVyzBU&_nc_oc=Adnc-ckNm7Z0rTQkG1f4ayHFeYTbh6O8f6RMSfqdZxAO1XlZcUMeEQFBnNQMumO-PGw&_nc_zt=23&_nc_ht=scontent.fsgn2-8.fna&_nc_gid=FsQfsRw9A4iuv3Cj6u5_Sg&oh=00_AfPjCtHoxHeBONWzgQ9sYLWBIFxo32bLBlJdBshZ7RwTdQ&oe=68589664',
    name: 'University of the Immaculate Conception',
    level: 'Senior High School Level',
    desc: 'I graduated from Ho Chi Minh City University of Technology and Education (HCMUTE) – one of the leading universities in Vietnam in the fields of engineering and technology. HCMUTE is known for its high-quality academic programs, accredited by international standards such as AUN-QA and ABET, and for its modern, practice-oriented learning environment. The university maintains strong partnerships with institutions worldwide, giving students early access to global knowledge and advanced technologies. It is also a place that fosters creativity, entrepreneurship, and solid professional skills among its students.',
    year: '2021 - 2023',
  },
  {
    logo: 'https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/508828613_2169721100131558_2860552920310533796_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeF3NKoW5FqapcTKDRM87cTS5BnLy_o_4_rkGcvL-j_j-gFg--Kj-bseAPLl6jLlStE2WXdyl01hB1GK6mzX9-6S&_nc_ohc=IrgCe-enfDsQ7kNvwHVyzBU&_nc_oc=Adnc-ckNm7Z0rTQkG1f4ayHFeYTbh6O8f6RMSfqdZxAO1XlZcUMeEQFBnNQMumO-PGw&_nc_zt=23&_nc_ht=scontent.fsgn2-8.fna&_nc_gid=FsQfsRw9A4iuv3Cj6u5_Sg&oh=00_AfPjCtHoxHeBONWzgQ9sYLWBIFxo32bLBlJdBshZ7RwTdQ&oe=68589664',
    name: 'University of Southeastern Philippines',
    level: 'College Level',
    desc: 'USEP is a premier university in the region, offering quality education and research. Here, I am pursuing my Bachelor of Science in Computer Science, focusing on software engineering and UI/UX design.',
    year: '2023 - Present',
  },
];

const socialIcons = [
  { href: '#', icon: 'fa fa-facebook' },
  { href: '#', icon: 'fa fa-github' },
  { href: '#', icon: 'fa fa-linkedin' },
  { href: '#', icon: 'fa fa-instagram' },
  { href: '#', icon: 'fa fa-twitter' },
];

const interests = [
  { icon: 'fa fa-code', label: 'Coding' },
  { icon: 'fa fa-paint-brush', label: 'Design' },
  { icon: 'fa fa-gamepad', label: 'Gaming' },
  { icon: 'fa fa-music', label: 'Music' },
  { icon: 'fa fa-book', label: 'Reading' },
];

const About = () => {
  const [activeSection, setActiveSection] = useState('introduction');
  const introRef = useRef(null);
  const skillsRef = useRef(null);
  const eduRef = useRef(null);

  const handleScrollTo = (section) => {
    setActiveSection(section);
    let ref = introRef;
    if (section === 'skills') ref = skillsRef;
    if (section === 'education') ref = eduRef;
  
    const main = document.querySelector('.about-main.scrollable');
    if (main && ref.current) {
      const mainRect = main.getBoundingClientRect();
      const sectionRect = ref.current.getBoundingClientRect();
      const scrollOffset = sectionRect.top - mainRect.top - (main.clientHeight / 2) + (ref.current.clientHeight / 2);
      main.scrollTo({
        top: main.scrollTop + scrollOffset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="app-container">
      <DustBackground />
      {/* <Navbar /> */}
      <div className="about-container">
        <aside className="about-sidebar">
          <h2 style={{ textAlign: 'left', fontSize: '2.2rem', marginBottom: 0 }}>ABOUT ME</h2>
          <div style={{ textAlign: 'left', fontSize: '1rem', color: '#aaa', marginBottom: '24px', marginTop: '2px' }}>My Profile At A Glance</div>
          <ul className="about-menu-list">
            <li>
              <button className={activeSection === 'introduction' ? 'active' : ''} onClick={() => handleScrollTo('introduction')}>Introduction</button>
            </li>
            <li>
              <button className={activeSection === 'skills' ? 'active' : ''} onClick={() => handleScrollTo('skills')}>Skills</button>
            </li>
            <li>
              <button className={activeSection === 'education' ? 'active' : ''} onClick={() => handleScrollTo('education')}>Education</button>
            </li>
          </ul>
          <div className="about-social-icons">
            {socialIcons.map((s, i) => (
              <a href={s.href} key={i} target="_blank" rel="noopener noreferrer">
                <i className={s.icon}></i>
              </a>
            ))}
          </div>
        </aside>
        <section className="about-main scrollable">
          <div className="section-with-vertical-line" id="introduction" ref={introRef}>
            <div className="section-title-vertical">
              <span className="section-dot"></span>
              <span className="section-vertical-line"></span>
            </div>
            <div className="section-content">
              <div className="section-title-text">Introduction</div>
              <div className="about-intro-row" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div className="about-intro-row1" style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '30', textAlign: 'left', width: '100%', gap: '32px' }}>
                  <div className="about-avatar-col" style={{ flex: 1, display: 'flex', justifyContent: 'flex-start' }}>
                    <img className="about-avatar" src="https://randomuser.me/api/portraits/men/32.jpg" alt="avatar" />
                  </div>
                  <div className="about-info-col" style={{ flex: 2 }}>
                    <div className="about-intro-header">
                      <div className="about-intro-name">PHUNG HUY HOANG.</div>
                      <div className="about-intro-role">Full-stack Developer, PowerPoint Design.</div>
                      <p className="about-desc">
                        I'm a Frontend Developer and PowerPoint Design Specialist, passionate about building modern, user-friendly web interfaces and creating impactful, professional slide decks. With a strong eye for design and solid technical skills, I help turn ideas into clear, attractive, and effective presentations..
                      </p>
                    </div>
                  </div>
                </div>
                <div className="about-intro-row2" style={{ display: 'flex', alignItems: 'flex-start', textAlign: 'left', width: '100%', gap: '32px' }}>
                  <div className="about-personal-details" style={{ flex: 1 }}>
                    <div className="about-details-title">Personal Details</div>
                    <div className="personal-detail-row"><span className="label">Age:</span><span className="value">23 years old</span></div>
                    <div className="personal-detail-row"><span className="label">Birthday:</span><span className="value">May 18, 2002</span></div>
                    <div className="personal-detail-row"><span className="label">Email:</span><span className="value">phunghoanghuy8@email.com</span></div>
                    <div className="personal-detail-row"><span className="label">Address:</span><span className="value">Ho Chi Minh</span></div>
                  </div>
                  <div className="about-interests-box" style={{ flex: 2 }}>
                    <div className="about-details-title">Interests</div>
                    <div className="about-interests-list">
                      {interests.map((it, i) => (
                        <div className="interest-icon" key={i} title={it.label}>
                          <i className={it.icon}></i>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-with-vertical-line" id="skills" ref={skillsRef}>
            <div className="section-title-vertical">
              <span className="section-dot"></span>
              <span className="section-vertical-line"></span>
            </div>
            <div className="section-content">
              <div className="section-title-text">Skills</div>
              <div className="skills-section">
                {skills.map((skill, idx) => (
                  <div className={`skill-box${skill.tools ? ' highlight' : ''}`} key={idx}>
                    <h4>{skill.title}</h4>
                    <p>{skill.desc}</p>
                    <div className="skill-icons">
                      {skill.icons.map((icon, i) => (
                        <img src={icon.src} alt={icon.alt} key={i} />
                      ))}
                    </div>
                    {skill.tools && <div className="tools-label">Tools I use</div>}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="section-with-vertical-line" id="education" ref={eduRef}>
            <div className="section-title-vertical">
              <span className="section-dot"></span>
              <span className="section-vertical-line"></span>
            </div>
            <div className="section-content">
              <div className="section-title-text">Education</div>
              <div className="education-section">
                {educations.map((edu, i) => (
                  <div className="edu-box" key={i}>
                    <div className="edu-logo">
                      <img src={edu.logo} alt="school" />
                    </div>
                    <div>
                      <div className="edu-title">{edu.name}</div>
                      <div className="edu-level">{edu.level}</div>
                      <div className="edu-desc">{edu.desc}</div>
                      <div className="edu-year">{edu.year}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* <div className="about-bg-number">02</div> */}
        </section>
      </div>
    </div>
  );
};

export default About; 