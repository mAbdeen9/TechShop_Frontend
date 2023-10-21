import React from "react";
import Logo from "../Logo/Logo";
import { NavLink } from "react-router-dom";
import classes from "./MobileMenu.module.css";

function MobileMenu({ onClick }) {
  return (
    <div className={classes.menuBurger}>
      <div className={classes.leftSide}>
        <button onClick={onClick}>x</button>
        <Logo />
        <div className={classes.sections__mobile}>
          <NavLink to="/Home">Home</NavLink>
          <NavLink to="/Shop">Shop</NavLink>
          <NavLink to="/About">About</NavLink>
          <NavLink to="/Contact">Contact</NavLink>
        </div>
      </div>
      <div onClick={onClick} className={classes.rightSide}></div>
    </div>
  );
}

export default MobileMenu;
