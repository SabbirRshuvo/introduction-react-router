import React from "react";
import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
  const post = useLoaderData();
  const { id, title, body } = post;
  return (
    <div>
      <h3>Post Deatils..{id}</h3>
      <p>Title.{title}</p>
    </div>
  );
};

export default PostDetails;
