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

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/home" Component={Home} />
          <Route path="/contact" Component={Home} />
          <Route path="/services" Component={Home} />
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
  );
}

export default App;
