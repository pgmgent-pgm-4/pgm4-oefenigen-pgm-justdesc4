import React, { useState, useContext } from "react";
import { UserContext } from "../hooks/User";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);

  const predefinedUsername = "admin";
  const predefinedPassword = "password";

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === predefinedUsername && password === predefinedPassword) {
      setUser({ username });
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
