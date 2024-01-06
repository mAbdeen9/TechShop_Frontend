import styles from "./Products.module.css";

function Products(props) {
  console.log(props);
  return <section className={`container ${styles.box}`}></section>;
}

export default Products;
