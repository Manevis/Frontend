import React from "react";
import Head from "next/head";
import Nav from "../components/nav";

import fetch from "isomorphic-unfetch";
import Link from "next/link";
import {encodeId, postSlug} from "../utils/hashId";

const Home = props => {
  console.log(props);
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
              <h4>{post.title}</h4>
            </a>
          </Link>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

Home.getInitialProps = async () => {
  const res = await fetch("http://localhost:8888/api/posts");
  const json = await res.json();
  return { ...json };
};

export default Home;
