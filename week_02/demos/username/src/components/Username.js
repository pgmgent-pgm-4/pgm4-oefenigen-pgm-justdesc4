import React, { useState } from "react";

export default function Username() {
  const [name, setName] = useState("");
  const handleChange = (e) => {
    setName(e.target.value);
  };
  return <div>Username</div>;
}
