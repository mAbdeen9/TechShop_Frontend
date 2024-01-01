import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import AboutSection from "../components/AboutSection/AboutSection";
import { useEffect } from "react";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <AboutSection />
      <Footer />
    </>
  );
}

export default About;
