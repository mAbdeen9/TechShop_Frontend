import React from "react";
import { HiMenuAlt1 } from "react-icons/hi";

function BurgerIcon({ onClick }) {
  return (
    <HiMenuAlt1 size={24} opacity={0.9} cursor={"pointer"} onClick={onClick} />
  );
}

export default BurgerIcon;
