import React from "react";
import { Get } from "../../../utils/request";
import {SEOGenerator, SEOGeneratorTypes} from "../../../utils/SEOGenerator";

const LabelPosts = props => {
  console.log(props);

  return (
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
  );
};

LabelPosts.getInitialProps = async ctx => {
  const label = await Get(`posts?label=${ctx.query.label}`);

  return {
    ...label,
    seo: SEOGenerator(label, SEOGeneratorTypes.LABEL),
  }
};

export default LabelPosts;
