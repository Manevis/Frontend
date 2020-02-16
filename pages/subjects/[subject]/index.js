import React from "react";
import { Get } from "../../../utils/request";
import Layout from "../../../components/Layout";

const SubjectPosts = props => {
  return (
    <Layout title={`مقالاتی با موضوع ${props.subject.name}`}>
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

SubjectPosts.getInitialProps = async ctx => {
  return await Get(`posts?subject=${ctx.query.subject}`);
};

export default SubjectPosts;
