import React from "react";
//  import { LinkedInIcon } from "@mui/icons-material";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { FiDribbble } from "react-icons/fi"; // the last folder is two initials of icon name
const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com" target="_blank" className="">
        <BsLinkedin />
      </a>
      <a href="https://github.com" target="_blank" className="">
        <BsGithub />
      </a>
      <a href="https://dribble.com" target="_blank" className="">
        <FiDribbble />
      </a>
    </div>
  );
};

export default HeaderSocials;
