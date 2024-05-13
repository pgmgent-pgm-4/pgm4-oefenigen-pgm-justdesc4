import React from "react";
import Emoji from "./Emoji";

export default function EmojiResults({ emojis }) {
  return (
    <div>
      {emojis.map((emoji) => (
        <Emoji key={emoji.title} emoji={emoji} />
      ))}
    </div>
  );
}
