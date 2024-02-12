import React, { useContext } from "react";
import ContactUs from "../components/contactus/ContactUs";
import Navbar from "../components/Navbar/index";
import Home from "../components/Home";
import Footer from "../components/Footer";
import Categories from "../components/Categories";
import Vision from "../components/vision/Vision";
import Mission from "../components/mission/Mission";
import Services from "../components/services/Services";
import Experience from "../components/experience/Experience";
import Asome from "../components/awsome/Asome";
import LangContext from "../context";
const Parentg = () => {
  const { lang } = useContext(LangContext);
  console.log(lang);
  return (
    <div dir={lang == "en" ? "ltr" : "rtl"}>
      <Navbar />
      <Home />
      <Categories />
      <Asome />
      <Vision />
      <Services />
      <Mission />
      <Experience />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Parentg;
