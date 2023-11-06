import "./portfolio.css";

import YommexStoreImage from "../../assets/projects/YommexStores.png";
import TeedeeePoshAdmin from "../../assets/projects/TeedeeposhAdmin.png";
import YomnetImage from "../../assets/projects/YomnetImage.png";
import YomShareImage from "../../assets/projects/YomShare.png";
import pshclient from "../../assets/projects/poshclient.png";

const data = [
  {
    id: 1,
    image: YommexStoreImage,
    title: "Yommex Pictures",
    github: "https://github.com/yommexg/yomcommerce",
    demo: "https://yom-stores.vercel.app/",
    frontend: "Next JS",
    backend: "Sanity",
  },
  {
    id: 2,
    image: TeedeeePoshAdmin,
    demo: "https://teedeeposh-git-main-yommexg.vercel.app/",
    title: "TeedeeePosh Admin",
    github: "https://github.com/yommexg/TeedeePosh",
    frontend: "React",
    backend: "Node, Express",
    database: "MongoDB",
    email: "animecodelord@gmail.com",
    password: "Procarious123#",
  },
  {
    id: 3,
    image: YomnetImage,
    demo: "https://yomnet-9d5a3.web.app/",
    title: "Yommex Netflix",
    github: "https://github.com/yommexg/Yomnet-Netflix-Clone-",
    frontend: "React",
    database: "The Movie Database(TMDB)",
  },
  {
    id: 4,
    image: YomShareImage,
    title: "Yomshare",
    github: "https://github.com/yommexg/yomshareme",
    frontend: "React",
    backend: "Sanity and GoogleAuthentication",
  },
  {
    id: 5,
    image: pshclient,
    demo: "https://teedeeposh-hz57.vercel.app/",
    title: "TeedeeePosh Client",
    github: "https://github.com/yommexg/TeedeePosh",
    frontend: "React",
    backend: "Node, Express",
    database: "MongoDB",
    email: "animecodelord@gmail.com",
    password: "Procarious123#",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My recent work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio-container">
        {data.map(
          ({
            id,
            image,
            title,
            github,
            demo,
            frontend,
            backend,
            database,
            email,
            password,
          }) => {
            return (
              <article className="portfolio-item" key={id}>
                <img src={image} alt={title} className="portfolio-item-image" />
                <h3>
                  <span>Title: </span>
                  {title}
                </h3>
                <h4>
                  <span>Frontend: </span>
                  {frontend}
                </h4>
                {backend && (
                  <h4>
                    <span>Backend: </span>
                    {backend}
                  </h4>
                )}
                {database && (
                  <h4>
                    <span>Database: </span>
                    {database}
                  </h4>
                )}

                {email && (
                  <div className="crendentials-container">
                    <p>Login Details</p>
                    <h4>
                      <span>Email/Username: </span>
                      {email}
                    </h4>
                    <h4>
                      <span>Password: </span>
                      {password}
                    </h4>
                  </div>
                )}

                <div className="portfolio-item-cta">
                  <a
                    href={github}
                    className="btn"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Github Link
                  </a>
                  {demo && (
                    <a
                      href={demo}
                      className="btn btn-primary"
                      rel="noreferrer"
                      target="_blank"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </article>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Portfolio;
