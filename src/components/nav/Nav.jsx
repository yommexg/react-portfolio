import { useState } from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { GiBookPile } from "react-icons/gi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareAdd } from "react-icons/bi";

import "./nav.css";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <div>
        <a
          onClick={() => setActiveNav("#")}
          href="#"
          className={activeNav === "#" ? "active" : ""}
        >
          <AiOutlineHome />
        </a>
        <p className="title">Home</p>
      </div>
      <div>
        <a
          onClick={() => setActiveNav("#about")}
          className={activeNav === "#about" ? "active" : ""}
          href="#about"
        >
          <AiOutlineUser />
        </a>
        <p className="title">About</p>
      </div>
      <div>
        <a
          onClick={() => setActiveNav("#experience")}
          className={activeNav === "#experience" ? "active" : ""}
          href="#experience"
        >
          <GiBookPile />
        </a>
        <p className="title">Experience</p>
      </div>
      <div>
        <a
          onClick={() => setActiveNav("#services")}
          className={activeNav === "#services" ? "active" : ""}
          href="#services"
        >
          <RiServiceLine />
        </a>
        <p className="title">Services</p>
      </div>
      <div>
        <a
          onClick={() => setActiveNav("#contact")}
          className={activeNav === "#contact" ? "active" : ""}
          href="#contact"
        >
          <BiMessageSquareAdd />
        </a>
        <p className="title">Contact</p>
      </div>
    </nav>
  );
};

export default Nav;
