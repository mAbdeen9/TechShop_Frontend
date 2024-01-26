import { useParams } from "react-router-dom";
import styles from "./Product.module.css";
import fakeTechProducts from "../../fakeTechProducts.json";
import { useEffect, useState } from "react";

const Product = () => {
  const { id } = useParams();
  const [productInfo, setProductInfo] = useState({});
  const [galleryImageSelector, setGalleryImageSelector] = useState("");

  console.log(Object.entries(productInfo.specs || {}));

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
        <h1>{productInfo?.title}</h1>
        <div className={styles.product__info__price}>${productInfo?.price}</div>
        <p className={styles.product__info__description}>
          {productInfo?.description}
        </p>
        <div className={styles.product__info__specs}>
          {Object.entries(productInfo.specs || {}).map((e, i) => {
            return (
              <li key={i}>
                <span
                  style={{
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                  }}
                >
                  {e[0]} :&nbsp;{" "}
                </span>
                {e[1]}
              </li>
            );
          })}
        </div>
        <div className={styles.line}></div>
        <div className={styles.add__to_cart}>
          <select name="count" id="count">
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
          <button>ADD TO CART</button>
        </div>
      </div>
    </section>
  );
};

export default Product;
