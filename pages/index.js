import React from "react";
import { Get } from "../utils/request";
import Layout from "../components/Layout";
import PostListRenderer from "../components/PostListRenderer";

const Home = props => {
  return (
    <Layout title="Autor.ir">
      <PostListRenderer postsResponse={props.postsResponse} />
    </Layout>
  );
};

Home.getInitialProps = async () => {
  const postsResponse = await Get("posts");
  return { postsResponse };
};

export default Home;
