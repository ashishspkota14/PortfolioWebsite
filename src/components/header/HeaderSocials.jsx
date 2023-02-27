import React from "react";
//  import { LinkedInIcon } from "@mui/icons-material";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { FaStackOverflow } from "react-icons/fa"; // the last folder is two initials of icon name
const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com" target="_blank" className="">
        <BsLinkedin />
      </a>
      <a href="https://github.com" target="_blank" className="">
        <BsGithub />
      </a>
      <a
        href="https://stackoverflow.com/users/7518534/aashish-sapkota"
        target="_blank"
        className=""
      >
        <FaStackOverflow />
      </a>
    </div>
  );
};

export default HeaderSocials;
