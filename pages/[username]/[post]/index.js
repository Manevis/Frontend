import React from "react";
import fetch from "isomorphic-unfetch";
import { postSlug } from "../../../utils/hashId";

const Post = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.content}</p>

      <pre>{props.subject?.name}</pre>
    </div>
  );
};

Post.getInitialProps = async ctx => {
  const res = await fetch(
    `http://localhost:8888/api/posts/${encodeURI(ctx.query.post)}`
  );
  // if (json.slug !== ctx.query.post) {
  //   if (ctx.res) {
  //     ctx.res.writeHead(301, {
  //       Location: `/${postSlug(json.title, json.id)}`
  //     });
  //     ctx.res.end();
  //   }
  // }
  return await res.json();
};

export default Post;
