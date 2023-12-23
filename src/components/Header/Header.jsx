import React, { useState } from "react";
import Classes from "./Header.module.css";
import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import MobileMenu from "../MobileMenu/MobileMenu";
import BurgerIcon from "../Icons/BurgerIcon";
import CartIcon from "../Icons/CartIcon";

function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(null);

  const showMobileMenuHandler = () => {
    document.body.style.overflow = "hidden";
    setShowMobileMenu(true);
  };

  const hideMobileMenuHandler = () => {
    document.body.style.overflow = "unset";
    setShowMobileMenu(false);
  };

  const scrollToElement = () => {
    const element = document.getElementById("contact");
    if (element) {
      if (showMobileMenu) {
        hideMobileMenuHandler();
      }
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={Classes.full__container}>
      {showMobileMenu && (
        <MobileMenu
          onClick={hideMobileMenuHandler}
          scrollToElement={scrollToElement}
        />
      )}
      <div className={`container ${Classes.big__screen__main}`}>
        <div className={Classes.menuBtn}>
          <BurgerIcon onClick={showMobileMenuHandler} />
        </div>
        <Logo />
        <div className={Classes.sections}>
          <NavLink to="/Home">Home</NavLink>
          <NavLink to="/Shop">Shop</NavLink>
          <NavLink to="/About">About</NavLink>
          <NavLink to="/" onClick={scrollToElement}>
            Contact
          </NavLink>
        </div>

        <CartIcon />
      </div>
    </header>
  );
}

export default Header;
