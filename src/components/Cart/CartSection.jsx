import classes from "./CartSection.module.css";
// import { useNavigate } from "react-router-dom";

function CartSection() {
  // const navigate = useNavigate();

  return (
    <section className="container">
      {/* <div className={classes.empty__cart}>
        <h1>YOUR SHOPPING CART IS EMPTY</h1>
        <div onClick={() => navigate("/home")}>
          <button>START SHOPPING</button>
        </div>
      </div> */}
      <div className={classes.fullCart}>
        <h2>5 ITEMS IN YOUR CART FOR $146.00</h2>
        <div>
          <div>ITEM</div>
          <div>QUANTITY</div>
          <div>PRICE</div>
        </div>
        <div className={classes.line}></div>
      </div>
    </section>
  );
}

export default CartSection;
