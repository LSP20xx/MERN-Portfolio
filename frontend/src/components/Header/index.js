import React, { useState, useEffect } from 'react';
import './_styles.scss';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [isNavActive, setIsNavActive] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 496) {
        setIsNavActive(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleToggleNav = () => {
    setIsNavActive(!isNavActive);
  };

  const handleLinkClick = () => {
    if (isNavActive) {
    setIsNavActive(false);
    }
  };

  return (
    <header className="headerContainer">
      <i className={`fas toggle ${!isNavActive && 'fa-bars'} ${isNavActive && 'toggleNavActive fa-times'}`} onClick={handleToggleNav}></i>
      <nav className={`navContainer ${isNavActive && 'navActive'}`}>
        <ul>
          <li>
            <Link to="/education" onClick={handleLinkClick}>Education</Link>
          </li>
          <li>
            <Link to="/skills" onClick={handleLinkClick}>Skills</Link>
          </li>
          <li>
            <Link to="/about" onClick={handleLinkClick}>About</Link>
          </li>
          <li>
            <Link to="/contact" onClick={handleLinkClick}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};