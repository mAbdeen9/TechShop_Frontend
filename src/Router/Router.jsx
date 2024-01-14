import React, { Suspense } from "react";
import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import PageLoading from "../components/Loading/PageLoading";

const Home = React.lazy(() => import("../pages/Home"));
const About = React.lazy(() => import("../pages/About"));
const Cart = React.lazy(() => import("../pages/Cart"));
const Products = React.lazy(() => import("../pages/ProductsPage"));
const Product = React.lazy(() => import("../pages/ProductPage"));

function Router() {
  return (
    <Fragment>
      <Suspense fallback={<PageLoading />}>
        <Routes>
          {<Route path="/home" element={<Home />} />}
          {<Route path="/about" element={<About />} />}
          {<Route path="/cart" element={<Cart />} />}
          {<Route path="/products/:cat" element={<Products />} />}
          {<Route path="/Product/:id" element={<Product />} />}
          {<Route path="*" element={<Home />} />}
        </Routes>
      </Suspense>
    </Fragment>
  );
}

export default Router;
