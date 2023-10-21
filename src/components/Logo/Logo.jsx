import React from "react";
import Classes from "./Logo.module.css";

function Logo() {
  return (
    <div className={Classes.logo}>
      React
      <span>APP</span>
    </div>
  );
}

export default Logo;
