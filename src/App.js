import "./App.css";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Categories from "./components/Categories";
import Vision from "./components/vision/Vision";
import Mission from "./components/mission/Mission";
import Services from "./components/services/Services";
import Experience from "./components/experience/Experience";
import Asome from "./components/awsome/Asome";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactUs from "./components/contactus/ContactUs";
import { useState } from "react";
import { useEffect } from "react";
import { HashLoader } from "react-spinners";
import scrollToTop from "./images/scrollToTop.json";
import Lottie from "lottie-react";
import Navbar from './components/Navbar/index';
import { LangContextProvider } from './context/index';

function App() {
  let [loading, setLoading] = useState(false);
  let [visible, setVisible] = useState(false);
  
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
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
    <div>
      {loading ? (
        <div className="">
          <HashLoader color="#36d7b7" style={{ display: "contents" }} />
        </div>
      ) : (
        <>
        <LangContextProvider>
          {/* <Router>
            <Routes>
              <Route path="/" Component={Home} />
              <Route path="/home" Component={Home} />
              <Route path="/contact" Component={Home} />
              <Route path="/services" Component={Home} />
            </Routes>
          </Router> */}
          <Navbar/>
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
              className="z-50 bg-[#009720] text-white text-center text-xl rounded-2xl fixed bottom-10 right-10 "
            >
              <Lottie
                className="contact__animation"
                animationData={scrollToTop}
                style={{ height: 70 }}
              />
            </button>
          ) : null}
          </LangContextProvider>
        </>
      )}
    </div>
  );
}

export default App;
