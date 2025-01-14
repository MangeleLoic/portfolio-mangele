import React, { useState } from 'react';
import './HoleCss.css';
function MyNavBar() {
  const [activeLink, setActiveLink] = useState('#home');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#home">Loïc Hernandez</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a
                className={`nav-link ${activeLink === '#about' ? 'active' : ''}`}
                href="#about"
                onClick={() => handleLinkClick('#about')}
              >
                Chi Sono
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeLink === '#projects' ? 'active' : ''}`}
                href="#projects"
                onClick={() => handleLinkClick('#projects')}
              >
                Progetti
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeLink === '#skills' ? 'active' : ''}`}
                href="#skills"
                onClick={() => handleLinkClick('#skills')}
              >
                Competenze
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeLink === '#footer' ? 'active' : ''}`}
                href="#footer"
                onClick={() => handleLinkClick('#footer')}
              >
                Contatti
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default MyNavBar;
