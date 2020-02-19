import React from "react";
import cs from 'classnames';
import { postId, postSlug } from "../../../utils/hashId";
import { httpGet } from '../../../utils/request';
import { SEOGenerator, SEOGeneratorTypes } from "../../../components/_SEO_/SEOGenerator";
import SinglePost from '../../../components/SinglePost';

const Post = props => {
  return (
    <article className={cs('container')}>
      <SinglePost post={props.post} />
    </article>
  );
};

Post.getInitialProps = async ctx => {
  try {
    const post = await httpGet(`posts/${postId(ctx.query.post)}`);
    const slug = postSlug(post.title, post.id);
    if (slug !== ctx.query.post) {
      if (ctx.res) {
        ctx.res.writeHead(301, {
          Location: encodeURI(`/@${post.user.username}/${slug}`)
        });
        ctx.res.end();
      }
    }
    return {
      post,
      SEO: SEOGenerator(post, SEOGeneratorTypes.POST)
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
