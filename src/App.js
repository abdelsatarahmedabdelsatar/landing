import "./App.css";

import { useState } from "react";
import { useEffect } from "react";
import { HashLoader } from "react-spinners";

import { LangContextProvider } from './context/index';
import Root from "./components/Root";

function App() {
  let [loading, setLoading] = useState(false);
  
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
        <LangContextProvider>
              <Root/>
          </LangContextProvider>
        </>
      )}
    </div>
  );
}

export default App;
