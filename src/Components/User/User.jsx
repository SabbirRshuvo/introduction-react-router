import React from "react";
import { Link } from "react-router-dom";

const User = ({ user }) => {
  const { name, email, phone } = user;

  return (
    <div>
      <h4>Name: {name}</h4>
      <p>Email: {email}</p>
      <p>Phone : {phone}</p>
      <Link to={`${user.id}`}>Details</Link>
    </div>
  );
};

export default User;
