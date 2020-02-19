import React from "react";
import { parseCookies, setCookie, destroyCookie } from "nookies";
import { httpPost } from "../../../utils/request";

const EmailValidation = props => {
  return <div>validation</div>;
};

EmailValidation.getInitialProps = async ctx => {
  const result = await httpPost(`users/register/email-validation`, {
    emailValidationToken: ctx.query.emailValidationToken
  });

  if (!result.ok) {
    if (ctx.res) {
      destroyCookie(ctx, "validationToken");
      ctx.res.writeHead(302, {
        Location: "/"
      });
      ctx.res.end();
    }
  } else {
    if (ctx.res) {
      setCookie(ctx, "validationToken", result.validationToken, {
        maxAge: 30 * 24 * 60 * 60,
        path: "/"
      });
      ctx.res.writeHead(302, {
        Location: "/register"
      });
      ctx.res.end();
    }
  }

  return result;
};

export default EmailValidation;
