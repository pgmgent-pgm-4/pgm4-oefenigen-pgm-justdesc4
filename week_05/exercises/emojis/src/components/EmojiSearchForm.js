import React from "react";

export default function EmojiSearchForm({ handleSearch }) {
  return (
    <form onSubmit={handleSearch}>
      <input type="text" name="search" placeholder="Search for emojis" />
      <button type="submit">Search</button>
    </form>
  );
}
