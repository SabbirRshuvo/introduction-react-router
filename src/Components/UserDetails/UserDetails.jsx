import React from "react";
import { useLoaderData, useRouteLoaderData } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData();
  const { name } = user;
  return (
    <div>
      <h2>Details about user.. {name}</h2>
    </div>
  );
};

export default UserDetails;
