import React from "react";
import { Get } from "../../../utils/request";
import Head from "next/head";

const SubjectPosts = props => {
  return (
    <>
      <Head>
        <title>مقالاتی با موضوع علمی</title>
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
    </>
  );
};

SubjectPosts.getInitialProps = async ctx => {
  return await Get(`posts?subject=${ctx.query.subject}`);
};

export default SubjectPosts;
