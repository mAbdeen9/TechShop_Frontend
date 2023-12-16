import React from "react";
import Classes from "./Collections.module.css";
// eslint-disable-next-line no-unused-vars
import Products from "./../../products.json";
// eslint-disable-next-line no-unused-vars
import Card from "../Card/Card";

import iPhones from "../../assets/iphones.png";
import pc from "../../assets/computers.png";
import CollectionCard from "../CollectionCard/CollectionCard";
import smartWatch from "../../assets/smartWatch.png";

function Collections() {
  return (
    <div className={`container-fluid  ${Classes.main}`}>
      <h1 className={Classes.title}>Collections</h1>
      <div className={`container-fluid ${Classes.flex__box}`}>
        <CollectionCard
          title={"Computers"}
          desc={"A wide variety of Smartphones"}
          nav={"/Shop"}
          img={pc}
          imgAlt={"Smartphone poster"}
          imgStyle={{ marginRight: 40 }}
        />
        <CollectionCard
          title={"Smartphones"}
          desc={"A wide variety of Smartphones"}
          nav={"/Shop"}
          img={iPhones}
          imgAlt={"Smartphone poster"}
        />

        <CollectionCard
          title={"Smartwatches"}
          desc={"A wide variety of smartwatches"}
          nav={"/Shop"}
          img={smartWatch}
          imgAlt={"smartwatches poster"}
        />
      </div>
    </div>
  );
}

export default Collections;
