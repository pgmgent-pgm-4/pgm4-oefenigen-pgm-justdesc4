import React from "react";

function CountrySelector({ countries, onCountrySelect }) {
  return (
    <select onChange={(e) => onCountrySelect(e.target.value)}>
      {countries.map((country, index) => (
        <option key={index} value={index}>
          {country.name}
        </option>
      ))}
    </select>
  );
}

export default CountrySelector;
