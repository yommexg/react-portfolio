import { FaLinkedin } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header-socials">
      <a
        href="https://linkedin.com/in/bolu-yomi-olugbodi-ab62951a0"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
      </a>
      <a href="https://github.com/yommexg" rel="noreferrer" target="_blank">
        <AiFillGithub />
      </a>
      <a
        href="https://instagram.com/animecodelord"
        rel="noreferrer"
        target="_blank"
      >
        <BsInstagram />
      </a>
    </div>
  );
};

export default HeaderSocials;
