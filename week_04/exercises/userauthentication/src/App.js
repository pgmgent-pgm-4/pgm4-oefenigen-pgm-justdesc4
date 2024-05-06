import React from "react";
import "./App.css";
import LoginForm from "./components/LoginForm";
import { UserContextProvider } from "./hooks/User";
import WelcomePage from "./components/WelcomePage";

function App() {
  return (
    <UserContextProvider>
      <div className="App">
        <LoginForm />
        <WelcomePage />
      </div>
    </UserContextProvider>
  );
}

export default App;
