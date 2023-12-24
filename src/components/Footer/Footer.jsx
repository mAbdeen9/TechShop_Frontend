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
          <Link>
            <FaGithub />
          </Link>
          <Link>
            <FaInstagram />
          </Link>
          <Link>
            <FaLinkedin />
          </Link>
          <Link>
            <FaYoutube />
          </Link>
        </div>
        <p className={classes.copyright}>
          Copyright &copy; {new Date().getFullYear()}
          <br />
          <Link to={"https://mabdeen.com/"}>
            <FaLink /> MAB17
          </Link>
        </p>
      </div>
    </footer>
  );
}
