import React from "react";
import classes from "./Loading.module.css";
const PageLoading = () => {
  return (
    <div className={classes.loading_box}>
      <div className={classes.ldsHourglass}></div>
    </div>
  );
};

export default PageLoading;
