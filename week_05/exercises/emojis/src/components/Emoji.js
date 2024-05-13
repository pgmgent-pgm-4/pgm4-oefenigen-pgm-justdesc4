import React from "react";

export default function Emoji({ emoji }) {
  return (
    <div>
      <h1>{emoji.title}</h1>
      <p>{emoji.symbol}</p>
      <p>{emoji.keywords}</p>
    </div>
  );
}
