import React from "react";
import Head from "next/head";
import Nav from "../components/nav";

import Link from "next/link";
import { postSlug } from "../utils/hashId";
import { Get } from "../utils/request";

const Home = props => {
  return (
    <div>
      <Head>
        <title>Autor.iR</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />

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
    </div>
  );
};

Home.getInitialProps = async () => {
  return await Get("posts");
};

export default Home;
