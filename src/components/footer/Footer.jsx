import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { AiOutlineYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        SAPKOTA
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Expeirience</a>
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

      <div className="footer__socials">
        <a href="https://www.facebook.com/asapkota1998/" target="_blank">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/aashishsapkota2022/" target="_blank">
          <FiInstagram />
        </a>
        <a
          href="https://www.youtube.com/channel/UCcpFwo-QglnK_IbD_79f97w"
          target="_blank"
        >
          <AiOutlineYoutube />
        </a>
      </div>

      {/* <div className="footer__copyright">
        <small>&copy; Aashish </small>
      </div> */}
    </footer>
  );
};

export default Footer;
