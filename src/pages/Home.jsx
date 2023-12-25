import React from "react";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Collections from "../components/Collections/Collections";
import Form from "../components/Form/Form";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <Header />
      <Main />
      <Collections />
      <Form />
      <Footer />
    </>
  );
}

export default Home;
