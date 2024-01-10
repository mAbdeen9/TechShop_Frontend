import { useLocation } from "react-router-dom";
import styles from "./Products.module.css";

function Products(props) {
  const location = useLocation();

  return (
    <section className={`container-fluid ${styles.box}`}>
      <div className={`container ${styles.products__box}`}>
        <h2>{location.pathname.split("/").pop()}</h2>
      </div>
    </section>
  );
}

export default Products;
