import React, { Suspense } from "react";
import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

const Home = React.lazy(() => import("../pages/Home"));
const About = React.lazy(() => import("../pages/About"));

function Router() {
  return (
    <Fragment>
      <Suspense>
        <Routes>
          {<Route path="/home" element={<Home />} />}
          {<Route path="/about" element={<About />} />}
          {<Route path="*" element={<Home />} />}
        </Routes>
      </Suspense>
    </Fragment>
  );
}

export default Router;
