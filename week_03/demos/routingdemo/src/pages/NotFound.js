import React from "react";
import { useRouteError } from "react-router-dom";

export default function NotFound() {
  const error = useRouteError();

  return (
    <div>
      <h1>404</h1>
      <p>Page not found</p>
      {error ? <p>{error.statusText}</p> : null}
    </div>
  );
}
