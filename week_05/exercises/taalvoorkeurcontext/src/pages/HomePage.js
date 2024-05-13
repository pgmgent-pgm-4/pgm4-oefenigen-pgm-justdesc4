// HomePage.js
import React from "react";
import { LanguageContext } from "../context/LanguageContext";

export const HomePage = () => {
  const { language } = React.useContext(LanguageContext);

  return (
    <div
      className="flag"
      style={{
        width: "100px",
        height: "100px",
        backgroundColor:
          language === "nl" ? "red" : language === "en" ? "blue" : "green",
      }}
    >
      <p
        style={{
          color: "white",
          fontWeight: "bold",
          textTransform: "uppercase",
        }}
      >
        {language}
      </p>
    </div>
  );
};
