import Navbar from '../components/Navbar';
import DustBackground from '../components/DustBackground';
import './About.css';
import React, { useState, useRef } from 'react';
import AvaTar from '../assets/daxong.png'


const skills = [
  {
    title: 'Software & Website Development',
    desc: [
      "Proficient in responsive web design and development, ensuring an optimal user experience and fast loading times.",
      "Skilled in HTML, CSS, JavaScript, and modern frameworks (such as React and Tailwind CSS) to create clean, maintainable front-end interfaces.",
      "Experienced in integrating APIs and handling data to enhance interactivity and functionality across web projects.",
      "Strong understanding of the full web development lifecycle from UI/UX design to front-end implementation and SEO optimization.",
      "Able to deploy and manage websites on hosting/server environments, ensuring security, scalability, and stable performance."
    ],
    icons: [
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', alt: 'HTML5' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', alt: 'CSS3' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', alt: 'JavaScript' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', alt: 'React' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', alt: 'NodeJS' },
    ],
  },
  {
    title: 'PowerPoint Design',
    desc: [
      "Having parents who are teachers, I often design PowerPoint slides for lectures and presentations. This hands-on experience has helped me master creating clear, visually appealing layouts, selecting appropriate colors and images, and applying smooth animations to make content engaging and easy to follow"
    ],
    icons: [
      { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Microsoft_Office_PowerPoint_%282019%E2%80%93present%29.svg/2203px-Microsoft_Office_PowerPoint_%282019%E2%80%93present%29.svg.png', alt: 'Photoshop' },
      { src: 'https://img.utdstc.com/icon/cf3/4c0/cf34c0da5a5d191da6d35ff079d170ece0c86c81092bccf5da3fe25f925789a1:200', alt: 'Adobe XD' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', alt: 'Figma' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg', alt: 'Canva' },
    ],
  },
];

const educations = [
  {
    logo: 'https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/482009044_631623413063121_7724380613014001949_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeF0KK1wlWr1ndVg2NuyeVyLzIrAmpbBL7bMisCalsEvtmJ-8N6VEd_GgMKWLUvuFzJbDdlyThFXcz2lY3Qg7v8d&_nc_ohc=K-PsUNo67NMQ7kNvwHUx3mr&_nc_oc=AdnaCVtDsS8-Yuvd41Pp_PUHEPpTR2RMetkxGX8sTdCORqrcjZkZf2AmiJIm-PVTbyQ&_nc_zt=23&_nc_ht=scontent.fsgn2-4.fna&_nc_gid=74JoVwnSkF3vlnVSp-gszw&oh=00_AfMhLJOBi4q3TUjr7JuLmKEHOWKUGdTAsH2ey4bCTywVOA&oe=6859C3B8',
    name: 'THPT Krong Ana',
    level: 'High School Level',
    desc: "It is one of the three high schools in Krong Ana District. Although located in a rural area, the school’s teaching quality and faculty expertise are exceptional, with many teachers holding Master’s degrees and being well-known across the province for their exam preparation. Thanks to this, the school’s graduation rate is consistently high. I’m proud to have studied at such a high-quality school",
    year: '2017 - 2020',
  },
  {
    logo: 'https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/508828613_2169721100131558_2860552920310533796_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeF3NKoW5FqapcTKDRM87cTS5BnLy_o_4_rkGcvL-j_j-gFg--Kj-bseAPLl6jLlStE2WXdyl01hB1GK6mzX9-6S&_nc_ohc=IrgCe-enfDsQ7kNvwHVyzBU&_nc_oc=Adnc-ckNm7Z0rTQkG1f4ayHFeYTbh6O8f6RMSfqdZxAO1XlZcUMeEQFBnNQMumO-PGw&_nc_zt=23&_nc_ht=scontent.fsgn2-8.fna&_nc_gid=FsQfsRw9A4iuv3Cj6u5_Sg&oh=00_AfPjCtHoxHeBONWzgQ9sYLWBIFxo32bLBlJdBshZ7RwTdQ&oe=68589664',
    name: 'Ho Chi Minh City University of Technology and Education (HCMUTE)',
    level: 'Senior High School Level',
    desc: 'I graduated from Ho Chi Minh City University of Technology and Education (HCMUTE) – one of the leading universities in Vietnam in the fields of engineering and technology. HCMUTE is known for its high-quality academic programs, accredited by international standards such as AUN-QA and ABET, and for its modern, practice-oriented learning environment. The university maintains strong partnerships with institutions worldwide, giving students early access to global knowledge and advanced technologies. It is also a place that fosters creativity, entrepreneurship, and solid professional skills among its students.',
    year: '2020 - 2024',
  },
  {
    logo: 'https://static.ybox.vn/2020/9/1/1601261656952-logo%20hinh%20tron.png',
    name: 'Goedu',
    level: 'External study program',
    desc: 'I have enrolled in a basic PowerPoint course here. Since I enjoy working with PowerPoint, I looked for and signed up for an online course to help me strengthen and master the fundamentals of design.',
    year: '2021 - Present',
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
                    <img className="about-avatar" src={AvaTar} alt="avatar" />
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
                    {Array.isArray(skill.desc) ? (
                      <ul className="skill-desc-list">
                        {skill.desc.map((item, i) => (
                          <li key={i} style={{ textAlign: 'left', listStyle: 'disc', marginLeft: 20 }}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <p>{skill.desc}</p>
                    )}
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