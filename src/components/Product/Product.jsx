import { useParams } from "react-router-dom";
import styles from "./Product.module.css";
import fakeTechProducts from "../../fakeTechProducts.json";
import { useEffect, useState } from "react";
import Modal from "../Modal/Modal";

const Product = () => {
  const { id } = useParams();
  const [productInfo, setProductInfo] = useState({});
  const [galleryImageSelector, setGalleryImageSelector] = useState("");
  const [count, setCount] = useState("1");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const product = fakeTechProducts.find((p) => p.id === +id);
    if (product) {
      setProductInfo(product);
    }
  }, [id]);

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

  const countValueHandler = (e) => setCount(e.target.value);

  const addToCartHandler = () => {
    const product = { ...productInfo, count };
    console.log(product);
    setShowModal(true);
  };

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
          <select onChange={countValueHandler} name="count">
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
          </select>
          <button onClick={addToCartHandler}>ADD TO CART</button>
        </div>
      </div>

      {showModal && (
        <Modal
          onClick={(e) =>
            e.target.className.includes("backdrop") && setShowModal(false)
          }
        ></Modal>
      )}
    </section>
  );
};

export default Product;
