import React from "react";
import { Get } from "../../../utils/request";
import {SEOGenerator, SEOGeneratorTypes} from "../../../components/_SEO_/SEOGenerator";
import PostListRenderer from '../../../components/PostListRenderer';

const SubjectPosts = props => {
  return (
    <PostListRenderer postsResponse={props.postsResponse} />
  );
};

SubjectPosts.getInitialProps = async ctx => {
  const postsResponse = await Get(`posts?subject=${ctx.query.subject}`);
  return {
    postsResponse,
    SEO: SEOGenerator(postsResponse, SEOGeneratorTypes.SUBJECT),
  };
};

export default SubjectPosts;
