import React from "react";

export default function StudentSearchForm({ inputSearch, setInputSearch }) {
  const handleChange = (event) => {
    setInputSearch(event.target.value);
  };
  return (
    <div>
      <label htmlFor="searchInput">Zoekterm</label>
      <input
        type="text"
        id="searchInput"
        value={inputSearch}
        onChange={handleChange}
      />
    </div>
  );
}
