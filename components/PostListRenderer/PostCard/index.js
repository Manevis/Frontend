import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";
import { URL } from "../../../utils/request";
import { postSlug } from "../../../utils/hashId";
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <article className={styles.postCard}>
      <Link
        href="/[username]/[post]"
        as={`@${post.user.username}/${postSlug(post.title, post.id)}`}
      >
        <a>
          <img src={URL(`photos/${post.cover}/file`)} alt={post.title} />
        </a>
      </Link>
      <h1>{post.title}</h1>
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
        <Link
          href="/subjects/[subject]"
          as={`/subjects/${post.subject.id}`}
        >
          <a>
            <h4>{post.subject.name}</h4>
          </a>
        </Link>
      )}
    </article>
  );
};

PostCard.propTypes = {
  post: PropTypes.object.isRequired
};

export default PostCard;
