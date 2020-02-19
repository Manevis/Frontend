import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";
import { URL } from "../../../utils/request";
import { postSlug } from "../../../utils/hashId";
import Link from "next/link";
import Label from "../../Design/Label";

const PostCard = ({ post }) => {
  return (
    <article className={styles.postCard}>
      <div className={styles.image}>
        <Link
          href="/[username]/[post]"
          as={`/@${post.user.username}/${postSlug(post.title, post.id)}`}
        >
          <a>
            <img src={URL(`photos/${post.cover}/file`)} alt={post.title} />
          </a>
        </Link>
        {post.subject && (
          <Link href="/subjects/[subject]" as={`/subjects/${post.subject.id}`}>
            <a className={styles.subject}>{post.subject.name}</a>
          </Link>
        )}
      </div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>

      {post.labels.length > 0 && (
        <div className={styles.labels}>
          {post.labels.map(label => <Label key={label.id} label={label} />)}
        </div>
      )}
    </article>
  );
};

PostCard.propTypes = {
  post: PropTypes.object.isRequired
};

export default PostCard;
