import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div>
      <h2>Oops!!</h2>
      <p>{error.statusText || error.message}</p>
    </div>
  );
};

export default Error;
