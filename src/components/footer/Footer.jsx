import { FaFacebook, FaXTwitter, FaInstagram } from "react-icons/fa6";

import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer-socials">
        <a
          href="https://facebook.com/AnimeCodeLord"
          rel="noreferrer"
          target="_blank"
        >
          <FaFacebook />
        </a>
        <a
          href="https://instagram.com/animecodelord"
          rel="noreferrer"
          target="_blank"
        >
          <FaInstagram />
        </a>
        <a
          href="https://x.com/@animecodel55406"
          rel="noreferrer"
          target="_blank"
        >
          <FaXTwitter />
        </a>
      </div>
      <div className="footer-copyright">
        <small>&copy; Yommex Enterprise. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
