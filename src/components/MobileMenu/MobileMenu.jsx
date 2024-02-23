import React from "react";
import Logo from "../Logo/Logo";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import classes from "./MobileMenu.module.css";

function MobileMenu({ onClick, scrollToElement }) {
  return (
    <div className={classes.menuBurger}>
      <div className={classes.leftSide}>
        <button onClick={onClick}>x</button>
        <Logo />
        <div className={classes.sections__mobile}>
          <NavLink to="/home" onClick={scrollToElement.bind(this, "home")}>
            Home
          </NavLink>
          <NavLink to="/shop" onClick={scrollToElement.bind(this, "shop")}>
            Shop
          </NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink
            to="/contact"
            onClick={scrollToElement.bind(this, "contact")}
          >
            Contact
          </NavLink>
          <div className={classes.social_icons}>
            <Link aria-label="Github" to="https://github.com/mAbdeen9">
              <FaGithub />
            </Link>
            <Link
              aria-label="Instagram"
              to="https://www.instagram.com/moe_ab92/"
            >
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
        </div>
      </div>
      <div onClick={onClick} className={classes.rightSide}></div>
    </div>
  );
}

export default MobileMenu;
