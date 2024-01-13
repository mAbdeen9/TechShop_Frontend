import classes from "./Card.module.css";
import { FaArrowCircleRight } from "react-icons/fa";

function Card({ img, title, price, id }) {
  return (
    <div key={id} className={classes.card}>
      <img className={classes.img} src={img} alt="product" />
      <div className={classes.title}>{title.slice(0, 19)}</div>
      <div className={classes.price}>${price}</div>
      <div className={classes.addToCart__btn}>
        MORE DETAILS <FaArrowCircleRight size={"18px"} />
      </div>
    </div>
  );
}

export default Card;
