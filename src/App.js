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

function App() {
  let [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {loading ? (
        <div className="">
          <HashLoader color="#36d7b7" style={{ display: "contents" }} />
        </div>
      ) : (
        <>
          <Router>
            <Routes>
              <Route path="/" Component={Home} />
              <Route path="/home" Component={Home} />
              <Route path="/contact" Component={ContactUs} />
              <Route path="/services" Component={Services} />
              <Route path="/about" Component={Experience} />
            </Routes>
          </Router>
          <Categories />
          <Asome />
          <Vision />
          <Services />
          <Mission />
          <Experience />
          <ContactUs />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
