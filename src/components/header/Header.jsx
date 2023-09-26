import "./header.css";

import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import Me from "../../assets/profile.jpg";

const Header = () => {
  return (
    <header>
      <div className="container header-container">
        <h5>Hello I'm</h5>
        <h1>Boluwatife Yomi-Olugbodi</h1>
        <h5 className="text-light">Fullstack developer</h5>
        <CTA />
        <HeaderSocials />
        <img src={Me} alt="me" className="me" />
        <a href="#contact" className="scroll-down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
