//import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styling/Tabs.scss'; // Import the SCSS file here
import logoImage from '../assets/BnL.svg'; // Adjust the path to your logo
import download from '../assets/resumeDownload.png'
import resumePDF from '../assets/LeonardoDulantoResume_2.pdf';

const Navigation = () => {
  const location = useLocation();

  const handleScrollToSection = (sectionId: string): void => {
    if (location.pathname === '/Aboutme') {
      const section = document.getElementById(sectionId);
      if (section) {
        const firstSkillBlock = section.querySelector('.skill-item') || section;
        console.log('Scrolling to:', firstSkillBlock); // Explicit read
        const offset = -140; // Adjust this value for the desired scroll position
        const elementPosition = firstSkillBlock.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition + offset;
  
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }
  };
  

  return (
    <header className="header">
      {/* Logo Section */}
      <Link to="/" className="logo" style={{ textDecoration: 'none', color: 'inherit' }}>
        <img src={logoImage} alt="Logo" width="50" height="50" />
        <span className="logo-text">Leonardo Dulanto</span>
      </Link>

      {/* Navigation Tabs */}
      <nav>
        <ul className="nav-tabs">
          <li>
            {location.pathname === '/Aboutme' ? (
              <button onClick={() => handleScrollToSection('projects')}>Projects</button>
            ) : (
              <Link to="/Projects">Projects</Link>
            )}
          </li>
          <li>
            {location.pathname === '/Aboutme' ? (
              <button onClick={() => handleScrollToSection('skills')}>Skills</button>
            ) : (
              <Link to="/Skills">Skills</Link>
            )}
          </li>
          <li>
          <a
              className="resume-tab"
              href={resumePDF}
              download="LeonardoDulantoResume_2.pdf"
              //style={{ textDecoration: 'none', color: 'inherit' }}
            >
            <img src={download} alt="download" className="download" />Résumé 
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
