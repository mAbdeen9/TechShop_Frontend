import React from "react";
import classes from "./Footer.module.css";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLink } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={`container-fluid ${classes.footer__container}`}>
      <div className={`container ${classes.footer__links}`}>
        <div>
          <Link aria-label="Github" to="https://github.com/mAbdeen9">
            <FaGithub />
          </Link>
          <Link aria-label="Instagram" to={"https://mabdeen.netlify.app/"}>
            <FaInstagram />
          </Link>
          <Link
            aria-label="Linkedin"
            to="https://www.linkedin.com/in/moe-abdeen/"
          >
            <FaLinkedin />
          </Link>
          <Link aria-label="Youtube" to="https://www.youtube.com/@m7md9110">
            <FaYoutube />
          </Link>
        </div>
        <div className={classes.images__copyrights}>
          <p>
            iPhones Image by pikisuperstar on Freepik
            <br />
            Apple watch Image by catalyststuff on Freepik
            <br />
            PC Images by storyset on Freepik
          </p>
        </div>
        <p className={classes.copyright}>
          Copyright &copy; {new Date().getFullYear()}
          <br />
          <Link to={"https://mabdeen.netlify.app/"}>
            <FaLink /> MAB17
          </Link>
        </p>
      </div>
    </footer>
  );
}
