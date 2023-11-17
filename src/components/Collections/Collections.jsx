import React from "react";
import Classes from "./Collections.module.css";
import Products from "./../../products.json";
import Card from "../Card/Card";

function Collections() {
  return (
    <div className={`container-fluid  ${Classes.main}`}>
      <h1 className={Classes.title}>Featured products</h1>
      <div className={`container ${Classes.flex__box}`}>
        {Products.map((p) => {
          return (
            <Card
              key={p.id}
              id={p.id}
              img={p.image}
              title={p.title}
              price={p.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Collections;
