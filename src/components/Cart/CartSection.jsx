import classes from "./CartSection.module.css";
import { useNavigate } from "react-router-dom";

function CartSection() {
  const navigate = useNavigate();

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

export default CartSection;
