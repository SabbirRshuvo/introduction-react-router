import React from "react";
import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {
  const users = useLoaderData();
  // state
  // use effect
  //  fetch
  // loader
  console.log(users);
  return (
    <div>
      <h2>Our Users..{users.length}</h2>
      {users.map((user) => (
        <User key={user.id} user={user}></User>
      ))}
    </div>
  );
};

export default Users;
