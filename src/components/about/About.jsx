import { FaAward } from "react-icons/fa6";
import { LuUsers2 } from "react-icons/lu";
import { VscFolderActive } from "react-icons/vsc";

import "./about.css";
import ME from "../../assets/profile.jpg";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about-container">
        <div className="about-me">
          <img src={ME} alt="me" />
        </div>
        <div className="about-content">
          <div className="about-cards">
            <article className="about-card">
              <FaAward className="about-icon" />
              <h5>Experience</h5>
              <small>7+ year Working </small>
            </article>
            <article className="about-card">
              <LuUsers2 className="about-icon" />
              <h5>Clients</h5>
              <small>50+ clients Worldwide</small>
            </article>
            <article className="about-card">
              <VscFolderActive className="about-icon" />
              <h5>Projects</h5>
              <small>7+ Completed Projects</small>
            </article>
          </div>
          <p>
            I am Yomi-Olugbodi Bolu, a Petroleum Engineering graduate with a
            passion for technology and a strong foundation in web and mobile app
            development using React and React Native. My commitment to
            excellence, coupled with my faith and hardworking nature, drives me
            to excel in my career and personal life.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
