import React from "react";
import { Get } from "../../../utils/request";
import {SEOGenerator, SEOGeneratorTypes} from "../../../utils/SEOGenerator";
import PostListRenderer from '../../../components/PostListRenderer';

const LabelPosts = props => {
  return (
    <PostListRenderer postsResponse={props.postsResponse} />
  );
};

LabelPosts.getInitialProps = async ctx => {
  const postsResponse = await Get(`posts?label=${ctx.query.label}`);

  return {
    postsResponse,
    SEO: SEOGenerator(postsResponse, SEOGeneratorTypes.LABEL),
  }
};

export default LabelPosts;
