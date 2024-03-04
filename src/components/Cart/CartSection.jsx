import classes from "./CartSection.module.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useStorage from "../../hooks/useStorage";

function CartSection() {
  const navigate = useNavigate();
  const [cartProducts, setCartProducts] = useState([]);
  const [count, setCount] = useState("");
  const { getCart } = useStorage();

  const countValueHandler = (e) => setCount(e.target.value);
  useEffect(() => {
    const data = getCart();
    if (data !== null) setCartProducts(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (cartProducts === undefined || !cartProducts.length > 0) {
    return (
      <section className="container">
        <div className={classes.empty__cart}>
          <h1>YOUR SHOPPING CART IS EMPTY</h1>
          <div onClick={() => navigate("/home")}>
            <button>START SHOPPING</button>
          </div>
        </div>
      </section>
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
          {cartProducts.map((item) => {
            return (
              <div key={item.id} className={classes.item}>
                <div className={classes.items_box_info_bg}>
                  <img src={item.image} alt={item.title} />
                  <div>
                    {item.title}
                    <span>
                      <div>${item.price}</div>
                      <select
                        value={item.count}
                        onChange={countValueHandler}
                        name="count"
                      >
                        <option value={item.count}>{item.count}</option>
                      </select>
                    </span>
                  </div>
                </div>
                <div className={classes.items_box_info_sm}>
                  <select
                    value={count}
                    onChange={countValueHandler}
                    name="count"
                  >
                    <option value={item.count}>{item.count}</option>
                  </select>
                  <div>${item.price}</div>
                  <button>X</button>
                </div>
              </div>
            );
          })}
        </div>

        <div className={classes.subtotal_box}>
          <div className={classes.empty__box}></div>
          <div className={classes.full__box}>
            <div className={classes.line}></div>
            <div>
              <div>Subtotal</div>
              <div>$173.00</div>
            </div>
          </div>
        </div>
        <div className={classes.buttons_box}>
          <button className={classes.back__btn}>BACK TO SHOPPING</button>
          <button className={classes.checkout__btn}>CHECKOUT</button>
        </div>
      </div>
    </section>
  );
}

export default CartSection;
