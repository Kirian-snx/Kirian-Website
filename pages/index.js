/* pages/index.js */

import '../styles/page.css';
import '../styles/retro.css';
import '../styles/mid-century.css';
import '../styles/neon-future.css';

import { useEffect, useState, useRef } from 'react';
import Head from 'next/head';
import CustomCursor from '../components/CustomCursor';

const Home = () => {
  const [era, setEra] = useState('retro');
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showHeader, setShowHeader] = useState(true);

  const scrollToRef = (ref) => {
    window.scrollTo(0, ref.current.offsetTop);
  };

  const retroRef = useRef(null);
  const midCenturyRef = useRef(null);
  const neonFutureRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setScrollPosition(currentScrollPos);

      if (currentScrollPos < retroRef.current.offsetTop) {
        setEra('retro');
      } else if (currentScrollPos < midCenturyRef.current.offsetTop) {
        setEra('mid-century');
      } else {
        setEra('neon-future');
      }

      // Hide the header when scrolling down
      if (currentScrollPos > scrollPosition && currentScrollPos > 0) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
    };

     // Apply era-specific class to body
    document.body.className = era;

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);

  return (
    <div>
      <Head>
        <title>My Portfolio</title>
      </Head>
      <CustomCursor era={era} />
      <div className={`header ${era}${showHeader ? ' visible' : ''}`}>
        <div onClick={() => scrollToRef(retroRef)}>Home</div>
        <div onClick={() => scrollToRef(midCenturyRef)}>Experience</div>
        <div onClick={() => scrollToRef(neonFutureRef)}>Projects</div>
      </div>
      <section ref={retroRef} className={`home ${era}`}>
        <h1>Your Name</h1>
        <h3>Your Occupation</h3>
        <div>
          <p>
            Lorem ipsum retro content. This is where you can add a short description about yourself.
          </p>
          {/* Add more content here */}
          <p>
            Welcome to my portfolio website! I'm passionate about web development and design, and I strive to create
            visually stunning and user-friendly websites.
          </p>
          <p>
            I specialize in front-end development, and I have experience working with technologies like React, Next.js, and CSS.
            Let's create something amazing together.
          </p>
          <div>
            <p>Additional content...</p>
            <p>More additional content...</p>
          </div>
          {/* End of additional content */}
        </div>
      </section>
      <section ref={midCenturyRef} className={`experience ${era}`}>
        <div className="timeline">
          {/* Add your experience items here */}
          <div className="experience-item">
            <span className="date">Date</span>
            <h2>Experience Title</h2>
            <p>Experience description goes here.</p>
          </div>
          {/* Add more experiences here */}
          <div className="experience-item">
            <span className="date">Date</span>
            <h2>Another Experience Title</h2>
            <p>Another experience description goes here.</p>
          </div>
          <div className="experience-item">
            <span className="date">2020 - Present</span>
            <h3>Front-end Developer</h3>
            <p>
              At ABC Company, I led front-end development for various client projects, implementing responsive and
              accessible web interfaces. I collaborated closely with the design team to ensure pixel-perfect designs.
            </p>
          </div>
          <div className="experience-item">
            <span className="date">2018 - 2020</span>
            <h3>UI/UX Designer</h3>
            <p>
              During my time at XYZ Design Studio, I focused on creating intuitive user interfaces and user experiences.
              I conducted user research and created wireframes and prototypes to guide the design process.
            </p>
          </div>
          {/* End of additional experiences */}
        </div>
      </section>
      <section ref={neonFutureRef} className={`projects ${era}`}>
        <div className="project-tiles">
          {/* Add your project tiles here */}
          <div className="project-tile">
            <h2>Project Title</h2>
            <p>Project description goes here.</p>
          </div>
          {/* Add more project tiles here */}
          <div className="project-tile">
            <h3>Portfolio Website</h3>
            <p>
              My personal portfolio website is an example of my work. It showcases my skills in web development and design.
              I built it using React, Next.js, and CSS.
            </p>
          </div>
          <div className="project-tile">
            <h3>E-commerce Website</h3>
            <p>
              I worked on a team to create a modern e-commerce website for a client. It features a responsive design,
              product catalog, and secure payment processing.
            </p>
          </div>
          <div className="project-tile">
            <h2>Another Project Title</h2>
            <p>Another project description goes here.</p>
          </div>
          {/* End of additional project tiles */}
        </div>
      </section>
    </div>
  );
};

export default Home;
