import React from "react";
import { Get } from "../../../utils/request";
import Layout from "../../../components/Layout";

const LabelPosts = props => {
  console.log(props);

  return (
    <Layout title={`مقالاتی با موضوع ${props.label.name}`}>
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
    </Layout>
  );
};

LabelPosts.getInitialProps = async ctx => {
  return await Get(`posts?label=${ctx.query.label}`);
};

export default LabelPosts;
