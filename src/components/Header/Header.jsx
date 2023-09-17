import React from "react";
import Classes from "./Header.module.css";

function Header() {
  return (
    <header className={Classes.full__container}>
      <div className={`container ${Classes.big__screen__main}`}>
        <div className="logo">MUSTFA</div>
        <div className="sections">sections</div>
        <div className="icons">icons</div>
      </div>
    </header>
  );
}

export default Header;
