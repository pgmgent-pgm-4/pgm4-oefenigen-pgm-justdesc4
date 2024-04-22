import React from "react";
import "./light.css";

export default function Light({ dimPercentage }) {
  return (
    <div
      className="light"
      style={{
        backgroundColor: `hsla(60, 100%, 50%, ${dimPercentage / 100})`,
      }}
    ></div>
  );
}
