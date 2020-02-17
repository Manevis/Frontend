import React from "react";
import { postId, postSlug } from "../../../utils/hashId";
import { Get } from "../../../utils/request";
import { SEOGenerator, SEOGeneratorTypes } from "../../../utils/SEOGenerator";

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
    const result = await Get(`posts/${postId(ctx.query.post)}`);
    const slug = postSlug(result.title, result.id);
    if (slug !== ctx.query.post) {
      if (ctx.res) {
        ctx.res.writeHead(301, {
          Location: encodeURI(`/@${result.user.username}/${slug}`)
        });
        ctx.res.end();
      }
    }
    return {
      ...result,
      SEO: SEOGenerator(result, SEOGeneratorTypes.POST)
    };
  } catch (e) {
    if (ctx.res) {
      ctx.res.writeHead(302, {
        Location: "/not-found"
      });
      ctx.res.end();
    }
  }
};

export default Post;
