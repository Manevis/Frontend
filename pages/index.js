import React from "react";
import { Get } from "../utils/request";
import PostListRenderer from "../components/PostListRenderer";

const Home = props => {
  return (
    <PostListRenderer postsResponse={props.postsResponse} />
  );
};

Home.getInitialProps = async () => {
  const postsResponse = await Get("posts");
  return {
    postsResponse,
    SEO: {
      title: 'AUTOR'
    },
  };
};

export default Home;
