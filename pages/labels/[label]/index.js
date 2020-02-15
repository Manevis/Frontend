import React from "react";
import { Get } from "../../../utils/request";
import Head from "next/head";

const LabelPosts = props => {
  console.log(props);

  return (
    <>
      <Head>
        <title>مقالاتی با موضوع تکنولوژی</title>
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

LabelPosts.getInitialProps = async ctx => {
  return await Get(`posts?label=${ctx.query.label}`);
};

export default LabelPosts;
