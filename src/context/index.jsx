// langContext.js
import React, { createContext, useState } from 'react';

const LangContext = createContext();

export const LangContextProvider = ({ children }) => {
  const [lang, setLang] = useState('en');

  const updateLang = (newLang) => {
    setLang(newLang);
  };

  return (
    <LangContext.Provider value={{ lang, updateLang }}>
      {children}
    </LangContext.Provider>
  );
};

export default LangContext;
