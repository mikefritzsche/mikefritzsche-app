import { useEffect } from 'react';
import './App.css';
// import './styles.scss';
import './styles/styles.scss'
import Logo from './components/Logo';
import useNavbarStore from './stores/useNavbarStore';
import HomePage from "./pages/HomePage.jsx";

function App() {
  const { fadeOut, showNavbar, setFadeOut, setShowNavbar } = useNavbarStore();

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');

    if (hasVisited) {
      setShowNavbar(true);
      document.body.classList.add('navbar-visible');
    } else {
      const timer = setTimeout(() => {
        setFadeOut(true);
      }, 1000); // Start fading out after 1 second

      const fadeTimer = setTimeout(() => {
        setShowNavbar(true);
        document.body.classList.add('navbar-visible');
        localStorage.setItem('hasVisited', 'true');
      }, 2000); // Show navbar after 2 seconds to ensure full fade out

      return () => {
        clearTimeout(timer);
        clearTimeout(fadeTimer);
      };
    }
  }, [setFadeOut, setShowNavbar]);

  return (
    <>
      {!showNavbar && (
        <div className="center-container">
          <h1 className={`logo ${fadeOut ? 'fade-out' : ''}`}><Logo/></h1>
        </div>
      )}
      {showNavbar && (
        <HomePage />
      )}
    </>
  );
}

export default App;
