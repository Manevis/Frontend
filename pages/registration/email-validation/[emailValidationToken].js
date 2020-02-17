import React from "react";
import { Post } from "../../../utils/request";

const EmailValidation = props => {
  return <div>validation</div>;
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
