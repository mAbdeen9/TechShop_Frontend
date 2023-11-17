import React from "react";
import classes from "./Card.module.css";

function Card({ img, title, price, id }) {
  return (
    <div key={id} className={classes.card}>
      <img className={classes.img} src={img} alt="product" />
      <div className={classes.title}>{title.slice(0, 19)}</div>
      <div className={classes.price}>${price}</div>
    </div>
  );
}

export default Card;
