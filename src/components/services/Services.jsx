import { BiCheck } from "react-icons/bi";

import "./services.css";

const Services = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className="container services-container">
        <article className="service">
          <div className="service-head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service-list">
            <li>
              <BiCheck className="service-list-icon" />
              <p>UI Wireframing</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>UI Prototyping</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>Responsive Design</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>UI Mockups</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>Icon and Graphics Design</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>Design System Development</p>
            </li>

            <li>
              <BiCheck className="service-list-icon" />
              <p>UI Animation</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>User Personas</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>User Research</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>Information Architecture</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>User Journey Mapping</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>Usability Testing</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>Accessibility Design</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>Content Strategy</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>Interaction Design</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>User Onboarding</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>A/B Testing</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>User Interface Copywriting</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>Product Evaluation</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>Stakeholder Collaboration</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>Project Management</p>
            </li>
          </ul>
        </article>
        {/* END OF UI UX */}
        <article className="service">
          <div className="service-head">
            <h3>Web Development</h3>
          </div>
          <ul className="service-list">
            <li>
              <BiCheck className="service-list-icon" />
              <p>Website Design</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>Front-End Development</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>Responsive Design</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>E-commerce Website Design</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>Product Photography</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>Blog Layout and Styling</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>Portfolio Design</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>SEO-Friendly Design</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>Landing Page Creation</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>Website Maintenance</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>Social Media Integration</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>Browser Testing</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>Server-Side Logic</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>Database Management</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>API Development</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>Authentication/Authorization</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>Version Control</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>Server Configuration</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>Performance Optimization</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>Data Validation and Sanitization</p>
            </li>
          </ul>
        </article>
        {/* END OF Web Developent */}
      </div>
    </section>
  );
};

export default Services;
