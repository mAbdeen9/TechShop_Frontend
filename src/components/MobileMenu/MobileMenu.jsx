import React from "react";
import Logo from "../Logo/Logo";
import { NavLink } from "react-router-dom";
import classes from "./MobileMenu.module.css";

function MobileMenu({ onClick, scrollToElement }) {
  return (
    <div className={classes.menuBurger}>
      <div className={classes.leftSide}>
        <button onClick={onClick}>x</button>
        <Logo />
        <div className={classes.sections__mobile}>
          <NavLink to="/home" onClick={onClick}>
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
        </div>
      </div>
      <div onClick={onClick} className={classes.rightSide}></div>
    </div>
  );
}

export default MobileMenu;
