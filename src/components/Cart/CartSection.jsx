import classes from "./CartSection.module.css";

function CartSection() {
  return (
    <section className="container">
      <div className={classes.empty__cart}>
        <h1>YOUR SHOPPING CART IS EMPTY</h1>
        <div>
          <button>START SHOPPING</button>
        </div>
      </div>
    </section>
  );
}

export default CartSection;
