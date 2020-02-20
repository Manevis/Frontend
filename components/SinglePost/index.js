import React from "react";
import { URL } from "../../utils/request";
import PostAuthorTopBar from "./PostAuthorTopBar";
import { imgFile } from "../../utils/img";

const SinglePost = ({ post }) => {
  return (
    <div>
      <PostAuthorTopBar author={post.user} />
      <img src={imgFile(post.cover)} alt={post.title} />
      <h1>{post.title}</h1>
      <p>{post.content}</p>

      <pre>{post.subject?.name}</pre>
    </div>
  );
};

export default SinglePost;
