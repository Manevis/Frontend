import React from "react";
import { httpGet } from "../utils/request";
import PostListRenderer from "../components/PostListRenderer";
import MainPageSidebar from "../components/MainPageSidebar";

const Home = props => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-9">
          <PostListRenderer postsResponse={props.postsResponse} />
        </div>
        <MainPageSidebar />
      </div>
    </div>
  );
};

Home.getInitialProps = async ctx => {
  const postsResponse = await httpGet("posts");
  return {
    postsResponse
  };
};

export default Home;
