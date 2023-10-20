import 'styles/retro.css';
import 'styles/mid-century.css';
import 'styles/neon-future.css';
/* pages/index.js */

import { useEffect, useState } from 'react';
import Head from 'next/head';
import CustomCursor from '../components/CustomCursor';

const Home = () => {
  const [era, setEra] = useState('retro');
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      if (scrollPosition < 500) {
        setEra('retro');
      } else if (scrollPosition < 1000) {
        setEra('mid-century');
      } else {
        setEra('neon-future');
      }
    };

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
      <div className={`home ${era}`}>
        <section className={`home-section ${era === 'retro' ? 'active' : ''}`}>
          <h1>Home</h1>
          <p>Lorem ipsum retro content</p>
        </section>
        <section className={`experience-section ${era === 'mid-century' ? 'active' : ''}`}>
          <h1>Experience</h1>
          <p>Lorem ipsum mid-century content</p>
        </section>
        <section className={`project-section ${era === 'neon-future' ? 'active' : ''}`}>
          <h1>Project</h1>
          <p>Lorem ipsum neon-future content</p>
        </section>
      </div>
      <style jsx>{`
        /* Add era-specific styles and transitions */
        .home-section,
        .experience-section,
        .project-section {
          opacity: 0;
          transition: opacity 0.5s;
        }

        .home-section.active,
        .experience-section.active,
        .project-section.active {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default Home;
