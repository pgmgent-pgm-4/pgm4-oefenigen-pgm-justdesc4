import React, { useState } from "react";

export default function Message() {
  const [messages, setMessages] = useState(false);
  const handleClickShow = () => {
    setMessages(!messages);
  };

  return (
    <div>
      <button onClick={handleClickShow}>Klik hier</button>
      {messages && <p>Mijn bericht</p>}
    </div>
  );
}
