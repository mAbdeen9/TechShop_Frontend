import React from "react";
import { AiOutlineShopping } from "react-icons/ai";

function CartIcon() {
  return (
    <AiOutlineShopping
      size={24}
      opacity={0.9}
      cursor={"pointer"}
      onClick={() => console.log("cart icon clicked!")}
    />
  );
}

export default CartIcon;
