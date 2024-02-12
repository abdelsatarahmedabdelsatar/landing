import "./App.css";

<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { HashLoader } from "react-spinners";
import scrollToTop from "./images/scrollToTop.json";
import Lottie from "lottie-react";
import { LangContextProvider } from "./context/index";
import Parentg from "./components/Parentg";

function App() {
  let [loading, setLoading] = useState(false);
  let [visible, setVisible] = useState(false);

=======
import { useState } from "react";
import { useEffect } from "react";
import { HashLoader } from "react-spinners";

import { LangContextProvider } from './context/index';
import Root from "./components/Root";

function App() {
  let [loading, setLoading] = useState(false);
  
>>>>>>> b7eba8af2b5dd4e7ac7b9022adcde0526f3ec4ee
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);


  return (
    <div>
      {loading ? (
        <div className="">
          <HashLoader color="#36d7b7" style={{ display: "contents" }} />
        </div>
      ) : (
        <>
<<<<<<< HEAD
          <LangContextProvider>
            {/* <Router>
            <Routes>
              <Route path="/" Component={Home} />
              <Route path="/home" Component={Home} />
              <Route path="/contact" Component={Home} />
              <Route path="/services" Component={Home} />
            </Routes>
          </Router> */}
            <Parentg />
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
=======
        <LangContextProvider>
              <Root/>
>>>>>>> b7eba8af2b5dd4e7ac7b9022adcde0526f3ec4ee
          </LangContextProvider>
        </>
      )}
    </div>
  );
}

export default App;
