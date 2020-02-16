import React from "react";
import PropTypes from "prop-types";
import PostCard from "./PostCard";

const PostListRenderer = ({ postsResponse }) => {
  return (
    <section>
      {postsResponse.posts.map(post => (
        <PostCard post={post} key={post.id} />
      ))}
    </section>
  );
};

PostListRenderer.propTypes = {
  postsResponse: PropTypes.object.isRequired
};

export default PostListRenderer;
