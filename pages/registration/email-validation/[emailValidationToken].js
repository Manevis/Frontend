import React from "react";
import { Post } from "../../../utils/request";
import Layout from "../../../components/Layout/Layout";

const EmailValidation = props => {
  return <Layout>validation.</Layout>;
};

EmailValidation.getInitialProps = async ctx => {
  const result = await Post(
    `users/register/email-validation`,
    {
      emailValidationToken: ctx.query.emailValidationToken
    }
  );

  if (!result.ok) {
    if (ctx.res) {
      ctx.res.writeHead(302, {
        Location: "/"
      });
      ctx.res.end();
    }
  }

  return result;
};

export default EmailValidation;
