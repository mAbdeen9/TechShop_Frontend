import React, { useState } from "react";
import Classes from "./Header.module.css";
import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import MobileMenu from "../MobileMenu/MobileMenu";
import BurgerIcon from "../Icons/BurgerIcon";
import CartIcon from "../Icons/CartIcon";

function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(null);

  const handleScroll = (event) => {
    console.log(123);
  };

  const BurgerBtnHandler = () => {
    document.body.style.overflow = "hidden";
    setShowMobileMenu(true);
  };

  const mobileMenuHandler = () => {
    document.body.style.overflow = "unset";
    setShowMobileMenu(false);
  };

  return (
    <header onScroll={handleScroll} className={Classes.full__container}>
      {showMobileMenu && <MobileMenu onClick={mobileMenuHandler} />}
      <div className={`container ${Classes.big__screen__main}`}>
        <div className={Classes.menuBtn}>
          <BurgerIcon onClick={BurgerBtnHandler} />
        </div>
        <Logo />
        <div className={Classes.sections}>
          <NavLink to="/Home">Home</NavLink>
          <NavLink to="/Shop">Shop</NavLink>
          <NavLink to="/About">About</NavLink>
          <NavLink to="/Contact">Contact</NavLink>
        </div>

        <CartIcon />
      </div>
    </header>
  );
}

export default Header;
