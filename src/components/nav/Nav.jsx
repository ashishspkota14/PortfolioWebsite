import React from "react";
import "./nav.css";
import { FaHome } from "react-icons/fa";
import { RiUserSearchFill } from "react-icons/ri";
import { BiBookBookmark } from "react-icons/bi";
import { MdHomeRepairService } from "react-icons/md";
import { MdContactPhone } from "react-icons/md";
import { useState } from "react";
const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <>
      <nav>
        <a
          onClick={() => setActiveNav("#")}
          className={activeNav === "#" ? "active" : ""}
          href="#"
        >
          {" "}
          <FaHome />{" "}
        </a>
        <a
          onClick={() => setActiveNav("#about")}
          href="#about"
          className={activeNav === "#about" ? "active" : ""}
        >
          {" "}
          <RiUserSearchFill />{" "}
        </a>
        <a
          onClick={() => setActiveNav("#experience")}
          className={activeNav === "#experience" ? "active" : ""}
          href="#experience"
        >
          {" "}
          <BiBookBookmark />{" "}
        </a>
        <a
          onClick={() => setActiveNav("#services")}
          className={activeNav === "#services" ? "active" : ""}
          href="#services"
        >
          {" "}
          <MdHomeRepairService />{" "}
        </a>
        <a
          onClick={() => setActiveNav("#contact")}
          className={activeNav === "#contact" ? "active" : ""}
          href="#contact"
        >
          {" "}
          <MdContactPhone />{" "}
        </a>
      </nav>
    </>
  );
};

export default Nav;
