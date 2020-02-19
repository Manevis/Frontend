import React from "react";
import { httpGet } from "../../utils/request";
import {
  SEOGenerator,
  SEOGeneratorTypes
} from "../../components/_SEO_/SEOGenerator";
import PostListRenderer from "../../components/PostListRenderer";
import styles from "./UserPublicProfile.module.scss";
import { fullName } from "../../utils/string";
import { myRouter } from "../../utils/MyRouter";

const UserPublicProfile = ({ postsResponse }) => {
  const { user } = postsResponse;
  return (
    <div className={styles.root}>
      <div className="container-fluid">{fullName(user)}</div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <PostListRenderer postsResponse={postsResponse} />
          </div>
        </div>
      </div>
    </div>
  );
};

UserPublicProfile.getInitialProps = async ctx => {
  const postsResponse = await httpGet(
    `posts?user=${ctx.query.username.substring(1)}`
  );
  if (postsResponse.statusCode === 404) {
    myRouter(ctx, "/");
  } else {
    return {
      postsResponse,
      SEO: SEOGenerator(postsResponse, SEOGeneratorTypes.USER)
    };
  }
};

export default UserPublicProfile;
