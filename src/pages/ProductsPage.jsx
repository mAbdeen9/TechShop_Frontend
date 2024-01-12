import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Products from "../components/Products/Products";
import { useEffect } from "react";

function ProductsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <Products />
      <Footer />
    </>
  );
}

export default ProductsPage;
