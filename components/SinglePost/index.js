import React from "react";
import { URL } from "../../utils/request";
import PostAuthorTopBar from "./PostAuthorTopBar";

const SinglePost = ({ post }) => {
  console.log(post);
  return (
    <div>
      <PostAuthorTopBar author={post.user} />
      <img src={URL(`photos/${post.cover}/file`)} alt="" />
      <h1>{post.title}</h1>
      <p>{post.content}</p>

      <pre>{post.subject?.name}</pre>
    </div>
  );
};

export default SinglePost;
