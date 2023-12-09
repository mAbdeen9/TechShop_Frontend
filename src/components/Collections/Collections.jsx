import React from "react";
import Classes from "./Collections.module.css";
// eslint-disable-next-line no-unused-vars
import Products from "./../../products.json";
// eslint-disable-next-line no-unused-vars
import Card from "../Card/Card";
import { NavLink } from "react-router-dom";
import AppleWatch from "../../assets/AppleWatch.png";

function Collections() {
  return (
    <div className={`container-fluid  ${Classes.main}`}>
      <h1 className={Classes.title}>Collections</h1>
      <div className={`container-fluid ${Classes.flex__box}`}>
        <div className={Classes.collection__unit}>
          <h2>Smartphones </h2>
          <p>A wide variety of Smartphones </p>
          <NavLink
            style={{
              textDecoration: "none",
              color: "#1CB4F6",
              fontWeight: "600",
              fontSize: "18px",
            }}
            to="/Shop"
          >
            Shop {">"}
          </NavLink>
          <img src={AppleWatch} alt="Smartphone poster" />
        </div>
        <div className={Classes.collection__unit}>Computers</div>
        <div className={Classes.collection__unit}>Smart Watches</div>
        <div className={Classes.collection__unit}>Smart Watches</div>
      </div>
    </div>
  );
}

export default Collections;
