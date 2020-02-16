import React from "react";
import Head from "next/head";

import Link from "next/link";
import { postSlug } from "../utils/hashId";
import { Get } from "../utils/request";
import Layout from "../components/Layout/Layout";

const Home = props => {
  return (
    <Layout>
      <Head>
        <title>Autor</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {props.posts.map(post => (
        <div key={post.id}>
          <Link
            href="/[username]/[post]"
            as={`@${post.user.username}/${postSlug(post.title, post.id)}`}
          >
            <a>
              <h1>{post.title}</h1>
            </a>
          </Link>
          <p>{post.content}</p>
          {post.labels?.map(label => (
            <Link
              key={label.id}
              href="/labels/[label]"
              as={`/labels/${label.id}`}
            >
              <a style={{ padding: 5 }}>{label.name}</a>
            </Link>
          ))}

          {post.subject && (
            <Link href="/subjects/[subject]" as={`/subjects/${post.subject.id}`}>
              <a>
                <h4>{post.subject.name}</h4>
              </a>
            </Link>
          )}
        </div>
      ))}
    </Layout>
  );
};

Home.getInitialProps = async () => {
  return await Get("posts");
};

export default Home;
