import Resume from "../components/Resume.jsx";
import NavBar from "../components/NavBar";
import Logo from '../components/Logo';
import useNavbarStore from '../stores/useNavbarStore';
import Menu from "../components/Menu.jsx";

function ResumePage() {
  const { showNavbar } = useNavbarStore();

  return (
      <>
        <h1>Resume</h1>
        <Resume/>
      </>
  );
}

export default ResumePage;
