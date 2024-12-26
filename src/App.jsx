import { useEffect } from 'react';
import './App.css';
// import './styles.scss';
import './styles/styles.scss'
import Logo from './components/Logo';
import useNavbarStore from './stores/useNavbarStore';
import HomePage from "./pages/HomePage.jsx";

function App() {
  const { fadeOut, showNavbar, setFadeOut, setShowNavbar } = useNavbarStore();

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
