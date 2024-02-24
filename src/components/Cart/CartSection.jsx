import classes from "./CartSection.module.css";
import fakeTechProducts from "../../fakeTechProducts.json";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function CartSection() {
  const navigate = useNavigate();
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    setCartProducts(fakeTechProducts);
  }, []);
  console.log(cartProducts);
  if (!cartProducts.length > 0) {
    return (
      <div className={classes.empty__cart}>
        <h1>YOUR SHOPPING CART IS EMPTY</h1>
        <div onClick={() => navigate("/home")}>
          <button>START SHOPPING</button>
        </div>
      </div>
    );
  }

  return (
    <section className="container">
      <div className={classes.fullCart}>
        <h2>5 ITEMS IN YOUR CART FOR $146.00</h2>
        <div className={classes.items_header_info}>
          <div className={classes.items_header_info_bg}>
            <div>ITEM</div>
          </div>
          <div className={classes.items_header_info_sm}>
            <div>QUANTITY</div>
            <div>PRICE</div>
            <div></div>
          </div>
        </div>
        <div className={classes.line}></div>
        <div className={classes.items_box}>
          <div className={classes.items_box_info_bg}>
            <img src={cartProducts[0].image} alt={cartProducts[0].title} />
            <div>iPhone 12</div>
          </div>
          <div className={classes.items_box_info_sm}>
            <select name="" id=""></select>
            <div>$999</div>
            <button>X</button>
          </div>
        </div>
        <div className={classes.line}></div>
        <div className={classes.subtotal_box}>
          <div>Subtotal</div>
          <div>$173.00</div>
        </div>
        <div className={classes.buttons_box}>
          <button>BACK TO SHOPPING</button>
          <button>CHECKOUT</button>
        </div>
      </div>
    </section>
  );
}

export default CartSection;
