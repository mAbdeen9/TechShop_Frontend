import { useEffect } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import CartSection from "../components/Cart/CartSection";

function Cart() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <CartSection />
      <Footer />
    </>
  );
}

export default Cart;
