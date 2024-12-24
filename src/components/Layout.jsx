import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Logo from './Logo';
import NavBar from './NavBar';
import Menu from './Menu.jsx';
import useNavbarStore from '../stores/useNavbarStore';

const Layout = () => {
  const location = useLocation();
  const { showNavbar, setShowNavbar } = useNavbarStore();

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');

    if (hasVisited === 'true') {
      setShowNavbar(true);
      document.body.classList.add('navbar-visible');
    } else {
      document.body.classList.remove('navbar-visible');
    }
  }, [setShowNavbar]);

  useEffect(() => {
    if (showNavbar) {
      document.body.classList.add('navbar-visible');
    }
  }, [showNavbar]);

  return (
    <>
      <Logo />
      {/* Pass the current path to NavBar */}
      <NavBar currentPath={location.pathname} />
      <Menu />
      <div className="container">
        <div className="content">
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              classNames="fade"
              timeout={300}
            >
              <Outlet />
            </CSSTransition>
          </TransitionGroup>
        </div>
      </div>
    </>
  );
};

export default Layout;
