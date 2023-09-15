// footer.jsx

import "./footer.css";
import baulogo from "../../assets/bau.svg";
import baulogo_mirror from "../../assets/bau_mirror.svg";
import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
  const handleLinkClick = () => {
    window.scrollTo(0, 0); // This will scroll the page to the top
  };

  return (
    <footer className="footer">
      <img src={baulogo} alt="Logo 1" className="logo" />
      <div className="center-section">
        <p className="center-page">&copy; 2023 baubau. All rights reserved.</p>
        <RouterLink to="/terms-of-service" className="page-link" onClick={handleLinkClick}>
          Terms of Service
        </RouterLink>
        | 
        <RouterLink to="/privacy-policy" className="page-link" onClick={handleLinkClick}>
          Privacy Policy
        </RouterLink>
      </div>
      <img src={baulogo_mirror} alt="Logo 2" className="logo" />
    </footer>
  );
};

export default Footer;
