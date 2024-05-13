import React, { useState, useEffect } from "react";
import "./App.css";
import EmojiSearchForm from "./components/EmojiSearchForm";
import EmojiResults from "./components/EmojiResults";

function App() {
  const [emojis, setEmojis] = useState([]);
  const [filteredEmojis, setFilteredEmojis] = useState([]);

  useEffect(() => {
    fetch("https://www.pgm.gent/pgm-4/data/emojis.json")
      .then((response) => response.json())
      .then((data) => {
        setEmojis(data);
        setFilteredEmojis(data);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.search.value;
    const newFilteredEmojis = emojis.filter((emoji) => {
      return emoji.keywords.includes(query);
    });
    setFilteredEmojis(newFilteredEmojis);
  };

  return (
    <div className="App">
      <EmojiSearchForm handleSearch={handleSearch} />
      <EmojiResults emojis={filteredEmojis} />
    </div>
  );
}

export default App;
