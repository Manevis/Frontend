import React from "react";
import { httpGet } from "../../../utils/request";
import {
  SEOGenerator,
  SEOGeneratorTypes
} from "../../../components/_SEO_/SEOGenerator";
import PostListRenderer from "../../../components/PostListRenderer";

const LabelPosts = props => {
  return <PostListRenderer postsResponse={props.postsResponse} />;
};

LabelPosts.getInitialProps = async ctx => {
  const postsResponse = await httpGet(`posts?label=${ctx.query.label}`, ctx);

  return {
    postsResponse,
    SEO: SEOGenerator(postsResponse, SEOGeneratorTypes.LABEL)
  };
};

export default LabelPosts;
