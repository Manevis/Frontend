import React from "react";
import { Get } from "../../../utils/request";
import Head from "next/head";
import Layout from "../../../components/Layout/Layout";

const SubjectPosts = props => {
  return (
    <Layout>
      <Head>
        <title>مقالاتی با موضوع {props.subject.name}</title>
      </Head>
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
