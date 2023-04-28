import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Mobile App with React Native",
    github: "https://github.com/ashishspkota14/Estes-Park-Guide",
    demo: "https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization",
  },
  {
    id: 2,
    image: IMG2,
    title: "Warehouse Management Software",
    github:
      "https://github.com/ashishspkota14/430-WareHous-Inventory/tree/main",
    demo: "",
  },
  {
    id: 3,
    image: IMG3,
    title: "Mobile Application Hackathon",
    github: "https://github.com/ashishspkota14/Hackathon-2020",
    demo: "",
  },
  {
    id: 4,
    image: IMG4,
    title: "Frontend E-commerece",
    github: "https://github.com/ashishspkota14/FrontendApps",
    demo: "",
  },
  {
    id: 5,
    image: IMG5,
    title: "Website Worked on for Internship",
    github: "https://www.euc2experience.org/",
    demo: "",
  },
  {
    id: 6,
    image: IMG6,
    title: "Feedback App",
    github:
      "https://github.com/ashishspkota14/FrontendApps/tree/main/feedback-app",
    demo: "",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Personal Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              {/* {console.log(id)} */}
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3 style={{ textAlign: "center" }}>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                {/* ADD Feature of Description when hovering in demo button which is replaced by 'details' */}
                {/* <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a> */}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
