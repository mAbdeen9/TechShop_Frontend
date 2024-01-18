import styles from "./Product.module.css";

const Product = () => {
  return (
    <section className={`container ${styles.product__box}`}>
      <div className={styles.gallery__info}>
        <div className={styles.gallery__thumbs}>gallery</div>
        <div children={styles.gallery__main}>main image</div>
      </div>
      <div className={styles.product__info}>
        <h2>PRODUCT NAME</h2>
        <div className={styles.product__info__price}>$PRICE DIV</div>
        <div className={styles.product__info__description}>
          <ul>
            <li>Julia</li>
            <li>Mustfa</li>
            <li>Deena</li>
            <li>Mohamed</li>
          </ul>
        </div>
        <div className={styles.add__to_cart}>
          <select name="" id=""></select>
          <button>ADD TO CART</button>
        </div>
      </div>
    </section>
  );
};

export default Product;
