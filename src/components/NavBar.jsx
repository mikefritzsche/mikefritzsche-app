import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NavBar = ({ currentPath = '/' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate(); // React Router's navigation method

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About' },
    { path: '/resume', label: 'Resume' }
  ];

  return (
    <>
      <nav className="navbar">
        <h1 className="navbar-logo">
          <a href="/">
            &lt;Mike Fritzsche /&gt;
          </a>
        </h1>
        <button
          className="mobile-menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </nav>
      <ul className={`menu ${isMenuOpen ? 'menu-open' : ''}`}>
        {navItems.map(({ path, label }) => (
          <li
            key={path}
            className={currentPath === path ? 'active' : ''}
            onClick={() => {
              navigate(path); // Navigate without reloading
              setIsMenuOpen(false);
            }}
          >
            {label}
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavBar;
