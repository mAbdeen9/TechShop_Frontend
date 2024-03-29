import React from "react";
import ReactDom from "react-dom";
import { Fragment } from "react";
import classes from "./Modal.module.css";
import { useEffect } from "react";

function ModalOverlay(props) {
  return (
    <div onClick={props.handleClick} className={classes.backdrop}>
      <div className={classes.modal}>
        <div>{props.children}</div>
      </div>
    </div>
  );
}

const portalElement = document.getElementById("overlay");

function Modal(props) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  });

  return (
    <Fragment>
      {ReactDom.createPortal(
        <ModalOverlay handleClick={props.onClick}>
          {props.children}
        </ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
}

export default Modal;
