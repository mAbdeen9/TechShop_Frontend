import React from "react";
import Classes from "./Collections.module.css";
// eslint-disable-next-line no-unused-vars
import Products from "./../../products.json";
// eslint-disable-next-line no-unused-vars
import Card from "../Card/Card";

// <h1 className={Classes.title}>Featured products</h1>
//{Products.map((p) => {
//   return (
//     <Card
//       key={p.id}
//       id={p.id}
//       img={p.image}
//       title={p.title}
//       price={p.price}
//     />
//   );
// })}

function Collections() {
  return (
    <div className={`container-fluid  ${Classes.main}`}>
      <h1 className={Classes.title}>Collections</h1>
      <div className={`container ${Classes.flex__box}`}>
        <div className={Classes.collections__box}>
          <div className={`${Classes.sm__box}  ${Classes.grey}`}></div>
          <div className={`${Classes.sm__box}  ${Classes.yellow}`}></div>
          <div className={`${Classes.bg__box}  ${Classes.red}`}></div>
        </div>
        <div className={Classes.collections__box}>
          <div className={`${Classes.bg__box}  ${Classes.white}`}></div>
          <div className={`${Classes.sm__box}  ${Classes.green}`}></div>
          <div className={`${Classes.sm__box}  ${Classes.blue}`}></div>
        </div>
      </div>
    </div>
  );
}

export default Collections;
