import React from "react";
import classes from "./Main.module.css";
import mac from "../../assets/mac.png";

function Main() {
  return (
    <main id="home" className={classes.main__container}>
      <div className={`container ${classes.cover}`}>
        <div className={classes.text__box}>
          <div>React App</div>
          <div className={classes.smaller__text}>Tech Shop </div>
          <img className={classes.sm__screen__img} src={mac} alt="icon" />
          <p>
            Shop today for all of your,
            <span style={{ color: "#ec4899" }}> PC</span> &&
            <span style={{ color: "#eab305" }}> Mac</span> needs and more.
          </p>
        </div>
        <img className={classes.bg__screen__img} src={mac} alt="icon" />
      </div>
    </main>
  );
}

export default Main;
