import { useParams } from "react-router-dom";
import styles from "./Product.module.css";
import fakeTechProducts from "../../fakeTechProducts.json";
import { useEffect, useState } from "react";

const Product = () => {
  const [productInfo, setProductInfo] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const product = fakeTechProducts.find((p) => p.id === +id);
    if (product) {
      setProductInfo(product);
    }
  }, [id]);

  return (
    <section className={`container ${styles.product__box}`}>
      <div className={styles.gallery__info}>
        <div className={styles.gallery__thumbs}>
          {productInfo.gallery?.map((imageURL, index) => {
            return <img key={index} src={imageURL} alt="Product" />;
          })}
        </div>
        <div className={styles.gallery__main}>
          <img src={productInfo.image} alt="Product" />
        </div>
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
