import React from "react";
import fetch from "isomorphic-unfetch";
import {postId, postSlug} from "../../../utils/hashId";

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
  try {
    const res = await fetch(
      `http://localhost:8888/api/posts/${postId(ctx.query.post)}`
    );
    const json = await res.json();
    const slug = postSlug(json.title, json.id);
    if (slug !== ctx.query.post) {
      if (ctx.res) {
        ctx.res.writeHead(301, {
          Location: encodeURI(`/@${json.user.username}/${slug}`)
        });
        ctx.res.end();
      }
    }
    return json;
  } catch (e) {
    if(ctx.res) {
      ctx.res.writeHead(302, {
        Location: '/not-found'
      });
      ctx.res.end();
    }
  }
};

export default Post;
