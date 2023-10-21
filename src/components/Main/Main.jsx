import React from "react";
import classes from "./Main.module.css";
import vector from "../../assets/Ecommerce_checkout_laptop-amico-removebg-preview.png";

function Main() {
  return (
    <main className={classes.main__container}>
      <p>
        We Keep it Simple
        <span className={classes.line} />
      </p>
      <img src={vector} alt="icon" />
    </main>
  );
}

export default Main;
