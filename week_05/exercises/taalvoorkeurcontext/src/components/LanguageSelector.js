import React from "react";
import { LanguageContext } from "../context/LanguageContext";

export const LanguageSelector = () => {
  const { language, setLanguage } = React.useContext(LanguageContext);

  return (
    <div>
      <button onClick={() => setLanguage("nl")}>NL</button>
      <button onClick={() => setLanguage("en")}>EN</button>
      <button onClick={() => setLanguage("fr")}>FR</button>
    </div>
  );
};
