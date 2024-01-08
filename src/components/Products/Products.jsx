import { useLocation } from "react-router-dom";
import styles from "./Products.module.css";

function Products(props) {
  const location = useLocation();

  return (
    <section className={`container ${styles.box}`}>
      <h2>{location.pathname.split("/").pop()}</h2>
    </section>
  );
}

export default Products;
