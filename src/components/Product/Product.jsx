import { useNavigate, useParams } from "react-router-dom";
import styles from "./Product.module.css";
import fakeTechProducts from "../../fakeTechProducts.json";
import { useEffect, useState } from "react";
import useStorage from "../../hooks/useStorage";
import Modal from "../Modal/Modal";

const Product = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [productInfo, setProductInfo] = useState({});
  const [galleryImageSelector, setGalleryImageSelector] = useState("");
  const [count, setCount] = useState("1");
  const [showModal, setShowModal] = useState(false);
  const { addToLocalStorage } = useStorage();
  const { getSubtotal } = useStorage();

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
    setShowModal(true);
    addToLocalStorage(product);
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
        >
          <div className={styles.modal__header}>
            <div>
              <svg
                width="24"
                height="28"
                viewBox="0 0 25 25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 9.17l7.926 7.927L20.889 1"
                  vectorEffect="non-scaling-stroke"
                  stroke="red"
                  strokeWidth="3"
                  fill="none"
                  fillRule="evenodd"
                ></path>
              </svg>
              ADDED TO CART
            </div>
            <div
              className={styles.modal__header__close}
              onClick={() => setShowModal(false)}
            >
              X
            </div>
          </div>
          <div className={styles.modal__productInfo}>
            <img src={productInfo?.image} alt="selected product" />
            <div>
              <p>{productInfo?.title}</p>
              <p>${(+productInfo?.price * +count).toFixed(2)}</p>
              <p>Quantity : {count}</p>
            </div>
          </div>
          <div className={styles.modal__subtotal}>
            <div>Cart Subtotal : </div>
            <div>${getSubtotal()}</div>
          </div>
          <div>
            <div
              className={styles.modal__btnBox}
              onClick={() => navigate("/cart")}
            >
              <button>VIEW CART</button>
            </div>
            <div
              style={{ background: "white" }}
              className={styles.modal__btnBox}
              onClick={() => setShowModal(false)}
            >
              <button style={{ color: "black" }}>BACK</button>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};

export default Product;
