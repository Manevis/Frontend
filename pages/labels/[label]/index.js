import React from "react";
import { Get } from "../../../utils/request";

const LabelPosts = props => {
  console.log(props);

  return (
    <div>
      {props.posts.map(post => (
        <div key={post.id}>
          <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
};

LabelPosts.getInitialProps = async ctx => {
  return await Get(`posts?label=${ctx.query.label}`);
};

export default LabelPosts;
