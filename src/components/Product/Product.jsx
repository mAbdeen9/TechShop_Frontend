import { useParams } from "react-router-dom";
import styles from "./Product.module.css";
import fakeTechProducts from "../../fakeTechProducts.json";
import { useEffect, useState } from "react";

const Product = () => {
  const { id } = useParams();
  const [productInfo, setProductInfo] = useState({});
  const [galleryImageSelector, setGalleryImageSelector] = useState("");

  const changeImageHandler = (index) => {
    const galleryArray = document.querySelectorAll(".galleryElements");
    galleryArray.forEach((image, imageIndex) => {
      if (index === imageIndex) {
        image.classList.add("activeImage");
      } else {
        image.classList.remove("activeImage");
      }
    });

    const selectedImage = productInfo.gallery[index];
    setGalleryImageSelector(selectedImage);
  };

  useEffect(() => {
    const product = fakeTechProducts.find((p) => p.id === +id);
    if (product) {
      setProductInfo(product);
    }
  }, [id]);

  return (
    <section className={`container ${styles.product__box}`}>
      <div className={styles.gallery__info}>
        <div id="galleryElements" className={styles.gallery__thumbs}>
          {productInfo.gallery?.map((imageURL, index) => {
            return (
              <img
                className="galleryElements"
                onClick={() => changeImageHandler(index)}
                key={index}
                src={imageURL}
                alt="Product"
              />
            );
          })}
        </div>
        <div className={styles.gallery__main}>
          {galleryImageSelector ? (
            <img src={galleryImageSelector} alt="Product" />
          ) : (
            <img src={productInfo.image} alt="Product" />
          )}
        </div>
      </div>

      <div className={styles.product__info}>
        <h1>PRODUCT NAME</h1>
        <div className={styles.product__info__price}>$29.99</div>
        <p className={styles.product__info__description}>
          product__info__description__general
        </p>
        <div className={styles.product__info__specs}>
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
