
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Lottie from "lottie-react";
import Navbar from './../Navbar/index';
import Home from './../Home/index';
import Categories from './../Categories/index';
import Asome from './../awsome/Asome';
import Vision from './../vision/Vision';
import Services from './../services/Services';
import Mission from './../mission/Mission';
import Experience from './../experience/Experience';
import ContactUs from './../contactus/ContactUs';
import Footer from './../Footer/index';
import { useState } from "react";
import { useEffect } from "react";
import scrollToTop from "../../images/scrollToTop.json";
import { useContext } from 'react';
import LangContext from "../../context";


function Root() {
  let [visible, setVisible] = useState(false);
  const { lang } = useContext(LangContext);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* <Router>
            <Routes>
              <Route path="/" Component={Home} />
              <Route path="/home" Component={Home} />
              <Route path="/contact" Component={Home} />
              <Route path="/services" Component={Home} />
            </Routes>
          </Router> */}
      <Navbar />
      <div dir={lang=='ar'?'rtl':'ltr'}>
      <Home />
      <Categories />
      <Asome />
      <Vision />
      <Services />
      <Mission />
      <Experience />
      <ContactUs />
      <Footer />
      {visible ? (
        <button
          onClick={goToTop}
          className="z-50 bg-[#009720] text-white text-center text-xl rounded-full fixed bottom-10 right-10 "
        >
          <Lottie
            className="contact__animation"
            animationData={scrollToTop}
            style={{ height: 70 }}
          />
        </button>
      ) : null}
      </div>
    </>
  );
}

export default Root;
