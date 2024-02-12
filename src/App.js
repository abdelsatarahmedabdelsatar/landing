import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { HashLoader } from "react-spinners";
import scrollToTop from "./images/scrollToTop.json";
import Lottie from "lottie-react";
import { LangContextProvider } from "./context/index";
import Parentg from "./components/Parentg";
import Root from "./components/Root";


function App() {
  let [loading, setLoading] = useState(false);
  let [visible, setVisible] = useState(false);
  
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
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
        <LangContextProvider>
              <Root/>

          </LangContextProvider>
      )}
    </div>
  );
}

export default App;
