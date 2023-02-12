import React from "react";
import "./About.css";
import MyImage from "../../assets/me-about.jpg";
import { FaAward, FaUserSecret } from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={MyImage} alt="About Me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small> 3+ Years Coding </small>
            </article>

            <article className="about__card">
              <FaUserSecret className="about__icon" />
              <h5>Client</h5>
              <small> In Japan</small>
            </article>

            <article className="about__card">
              <AiOutlineFundProjectionScreen className="about__icon" />
              <h5>Projects</h5>
              <small> 80+ Completed </small>
            </article>
          </div>
          <p>
            I've worked in software development for last 5-year in my career,
            and my commitment to critical thinking and attention to detail have
            gotten me to where I am today: a senior software engineer for First
            Technology. I have a passion for processes, and I'm an experienced
            team leader who typically manages 10 developers at any given time.{" "}
          </p>
          <a href="#contact" className="btn btn-primary">
            {" "}
            Let's Have a Chat
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
