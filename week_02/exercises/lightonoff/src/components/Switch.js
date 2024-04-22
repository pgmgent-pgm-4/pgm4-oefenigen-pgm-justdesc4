import React, { useState } from "react";

export default function Switch() {
  const [setBackgroundColor, setColor] = useState(false);
  const handleBackgroundColor = () => {
    setColor(!setBackgroundColor);
    document.body.style.backgroundColor = setBackgroundColor
      ? "white"
      : "black";
  };

  return (
    <div>
      <div>
        <button onClick={handleBackgroundColor}>Switch</button>
      </div>
    </div>
  );
}
