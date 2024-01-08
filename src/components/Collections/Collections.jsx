import React from "react";
import Classes from "./Collections.module.css";
import iPhones from "../../assets/iphones.png";
import pc from "../../assets/computers.png";
import CollectionCard from "../CollectionCard/CollectionCard";
import smartWatch from "../../assets/smartWatch.png";

function Collections() {
  return (
    <div id="shop" className={` ${Classes.main}`}>
      <span className={Classes.line}></span>
      <h1 className={Classes.title}>Collections</h1>
      <div className={`container-fluid ${Classes.flex__box}`}>
        <CollectionCard
          title={"Computers"}
          desc={"A wide variety of Smartphones"}
          img={pc}
          imgAlt={"Smartphone poster"}
          imgStyle={{ marginRight: 40 }}
        />
        <CollectionCard
          title={"Smartphones"}
          desc={"A wide variety of Smartphones"}
          img={iPhones}
          imgAlt={"Smartphone poster"}
        />
        <CollectionCard
          title={"Smartwatches"}
          desc={"A wide variety of smartwatches"}
          img={smartWatch}
          imgAlt={"smartwatches poster"}
        />
      </div>
      <span className={Classes.line}></span>
    </div>
  );
}

export default Collections;
