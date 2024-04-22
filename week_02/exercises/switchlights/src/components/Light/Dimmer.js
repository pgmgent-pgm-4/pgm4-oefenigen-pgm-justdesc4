import React from "react";

export default function Dimmer({ dimPercentage, setDimPercentage }) {
  const handleChangeRange = (event) => {
    setDimPercentage(event.target.value);
  };
  return (
    <div>
      <input
        id="dimmer"
        type="range"
        min="0"
        max="100"
        step={1}
        value={dimPercentage}
        onChange={handleChangeRange}
      />
      <label htmlFor="dimmer">Dimmer</label>
    </div>
  );
}
