import React from "react";

export default function SelectCountry({ countries, setCountry, country }) {
  const handleChange = (e) => {
    setCountry(e.target.value);
  };
  return (
    <div>
      <select value={country} onChange={handleChange}>
        {countries.map((country, i) => (
          <option key={i} value={country.value}>
            {country.name}
          </option>
        ))}
      </select>
    </div>
  );
}
