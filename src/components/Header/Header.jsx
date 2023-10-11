import React from "react";
import Classes from "./Header.module.css";
import { AiOutlineShopping } from "react-icons/ai";
import { HiMenuAlt1 } from "react-icons/hi";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className={Classes.full__container}>
      <div className={`container ${Classes.big__screen__main}`}>
        <div className={Classes.sections}>
          <NavLink to="/Home">Home</NavLink>
          <NavLink to="/Shop">Shop</NavLink>
          <NavLink to="/About">About</NavLink>
        </div>
        <HiMenuAlt1
          className={Classes.menuBtn}
          size={22}
          opacity={0.9}
          cursor={"pointer"}
          onClick={() => console.log("menu icon clicked!")}
        />
        <div className={Classes.logo}>
          React
          <span>APP</span>
        </div>
        <div className={Classes.icons}>
          <AiOutlineShopping
            size={22}
            opacity={0.9}
            cursor={"pointer"}
            onClick={() => console.log("cart icon clicked!")}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
