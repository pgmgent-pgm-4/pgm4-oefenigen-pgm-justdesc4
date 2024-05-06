import React from "react";
import { useUser } from "../hooks/User";

const WelcomePage = () => {
  const { user } = useUser();

  return (
    <div>
      {user ? <h1>Welcome, {user.username}!</h1> : <h1>Please log in</h1>}
    </div>
  );
};

export default WelcomePage;
