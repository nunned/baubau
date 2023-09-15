// components/SimpleNavBar/simpleNavbar.jsx

import { animateScroll as scroll } from "react-scroll";
import "./simplenavbar.css";
import { Link as RouterLink } from "react-router-dom";
import logo from "../../assets/baubau.svg";
import contactme from "../../assets/contactme.svg";

const SimpleNavbar = () => {
  const handleButtonClick = () => {
    setTimeout(() => {
      scroll.scrollToBottom({
        duration: 1250,
        delay: 0,
        smooth: "easeInOutQuart",
        offset: -100,
      });
    }, 100); // Adjust the delay
  };

  return (
    <nav className="simpleNavbar">
        <RouterLink to="/">
          <img src={logo} alt="logo" className="baulogo" />
        </RouterLink>
        <RouterLink
          to="/"
          className="navdesktopMenuBtn"
          onClick={handleButtonClick}
        >
          <img src={contactme} alt="contact" className="desktopMenuImg" />
          Contact Me
        </RouterLink>
    </nav>
  );
};

export default SimpleNavbar;
