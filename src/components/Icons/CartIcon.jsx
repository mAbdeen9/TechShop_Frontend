import React from "react";
import { AiOutlineShopping } from "react-icons/ai";

function CartIcon({ onClick }) {
  return (
    <AiOutlineShopping
      size={24}
      opacity={0.9}
      cursor={"pointer"}
      onClick={onClick}
    />
  );
}

export default CartIcon;
