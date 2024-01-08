import { useLocation } from "react-router-dom";
import styles from "./Products.module.css";
import { Fragment } from "react";

function Products(props) {
  const location = useLocation();

  return (
    <Fragment>
      <section className={`container-fluid ${styles.box}`}>
        <h2>{location.pathname.split("/").pop()}</h2>
      </section>
    </Fragment>
  );
}

export default Products;
