import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Product from "../components/Product/Product";
import { useEffect } from "react";

function ProductPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <Product />
      <Footer />
    </>
  );
}
export default ProductPage;
