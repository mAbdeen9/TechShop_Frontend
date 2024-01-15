import { useLocation } from "react-router-dom";
import styles from "./Products.module.css";
import Card from "../Card/Card";
import { useEffect, useState } from "react";
import fakeTechProducts from "../../fakeTechProducts.json";

function Products() {
  const [data, setData] = useState([]);
  const [emoji, setEmoji] = useState();
  const location = useLocation();
  const headerText = location.pathname.split("/").pop();
  const emojiSelector = () => {
    if (headerText === "Smartwatches") setEmoji("⌚️");
    if (headerText === "Smartphones") setEmoji("📱");
    if (headerText === "Computers") setEmoji("🖥️");
  };

  useEffect(() => {
    setData(() => {
      return fakeTechProducts.filter(
        (product) => product.category === headerText
      );
    });

    window.scrollTo(0, 0);
    emojiSelector();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerText]);

  return (
    <section className={`container-fluid ${styles.box}`}>
      <div className={`container ${styles.products__box}`}>
        <div className={styles.header__box}>
          <div className={styles.line}></div>
          <h2>
            {headerText} <span>{emoji}</span>
          </h2>
          <div className={styles.line}></div>
        </div>
        <div className={styles.products__cards}>
          {data?.map((item) => {
            return (
              <Card
                img={item.image}
                title={item.title}
                id={item.id}
                key={item.id}
                price={item.price}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Products;
