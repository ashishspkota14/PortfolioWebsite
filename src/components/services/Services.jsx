import React from "react";
import "./services.css";
import { AiOutlineCheckCircle } from "react-icons/ai";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <AiOutlineCheckCircle className="service__list-icon" />
              <p>User Research</p>
            </li>
            <li>
              <AiOutlineCheckCircle className="service__list-icon" />
              <p>Wireframing</p>
            </li>

            <li>
              <AiOutlineCheckCircle className="service__list-icon" />
              <p>Prototyping</p>
            </li>
            <li>
              <AiOutlineCheckCircle className="service__list-icon" />
              <p>Information Architecture</p>
            </li>
            <li>
              <AiOutlineCheckCircle className="service__list-icon" />
              <p>UX Writing</p>
            </li>
            <li>
              <AiOutlineCheckCircle className="service__list-icon" />
              <p>Interactive Visual and Mobile Design</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <AiOutlineCheckCircle className="service__list-icon" />
              <p>Frontend Coding</p>
            </li>
            <li>
              <AiOutlineCheckCircle className="service__list-icon" />
              <p>Git</p>
            </li>
            <li>
              <AiOutlineCheckCircle className="service__list-icon" />
              <p>Responsive Design</p>
            </li>
            <li>
              <AiOutlineCheckCircle className="service__list-icon" />
              <p>Backend Languages </p>
            </li>
            <li>
              <AiOutlineCheckCircle className="service__list-icon" />
              <p>SEO</p>
            </li>
            <li>
              <AiOutlineCheckCircle className="service__list-icon" />
              <p>Program Frameworks</p>
            </li>
            <li>
              <AiOutlineCheckCircle className="service__list-icon" />
              <p>Testing and Debugging</p>
            </li>
            <li>
              <AiOutlineCheckCircle className="service__list-icon" />
              <p>Content Management Systems</p>
            </li>
          </ul>
        </article>
        {/* WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>Application Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <AiOutlineCheckCircle className="service__list-icon" />
              <p>Product Management</p>
            </li>
            <li>
              <AiOutlineCheckCircle className="service__list-icon" />
              <p>Agile Method & Scrum Management</p>
            </li>
            <li>
              <AiOutlineCheckCircle className="service__list-icon" />
              <p>User Interface and User Experience</p>
            </li>
            <li>
              <AiOutlineCheckCircle className="service__list-icon" />
              <p>Cross-Platform Compability</p>
            </li>
            <li>
              <AiOutlineCheckCircle className="service__list-icon" />
              <p>Modern Frameworks</p>
            </li>
            <li>
              <AiOutlineCheckCircle className="service__list-icon" />
              <p>QA and Performance Testing</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  );
};

export default Services;
