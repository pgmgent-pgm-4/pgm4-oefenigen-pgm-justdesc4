import React, { useState } from "react";

export default function Color() {
  const [listColors, setListColors] = useState([
    "rgb(255, 0, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 0, 255)",
  ]);
  const generateRandomColor = () => {
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)})`;
    setListColors([...listColors, randomColor]);
  };
  const removeColor = (index) => {
    const newListColors = listColors.filter((color, i) => i !== index);
    setListColors(newListColors);
  };

  return (
    <div>
      <button onClick={generateRandomColor}>Generate Random Color</button>
      <ul>
        {listColors.map((color, index) => (
          <li key={index} style={{ backgroundColor: color }}>
            {color}
            <button onClick={() => removeColor(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
