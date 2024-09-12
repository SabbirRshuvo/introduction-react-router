import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const { id, title, body } = post;
  return (
    <div>
      <h4>Id..{id}</h4>
      <h3>Body..{title}</h3>
      <p>Title..{body}</p>
      <Link to={`/post/${id}`}>Post Details</Link>
    </div>
  );
};

export default Post;
