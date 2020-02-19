import React from "react";
import cs from "classnames";
import { postId, postSlug } from "../../../utils/hashId";
import { httpGet } from "../../../utils/request";
import {
  SEOGenerator,
  SEOGeneratorTypes
} from "../../../components/_SEO_/SEOGenerator";
import SinglePost from "../../../components/SinglePost";
import { myRouter } from "../../../utils/MyRouter";

const Post = props => {
  return (
    <article className={cs("container")}>
      <SinglePost post={props.post} />
    </article>
  );
};

Post.getInitialProps = async ctx => {
  try {
    const post = await httpGet(`posts/${postId(ctx.query.post)}`);
    const slug = postSlug(post.title, post.id);
    if (slug !== ctx.query.post) {
      myRouter(ctx, `/@${post.user.username}/${slug}`, 301);
    }
    return {
      post,
      SEO: SEOGenerator(post, SEOGeneratorTypes.POST)
    };
  } catch {
    myRouter(ctx, "/not-found");
  }
};

export default Post;
