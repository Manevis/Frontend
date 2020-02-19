import React from "react";
import { setCookie, destroyCookie } from "nookies";
import { httpPost } from "../../../utils/request";
import { myRouter } from "../../../utils/MyRouter";

const EmailValidation = props => {
  return <div>validation</div>;
};

EmailValidation.getInitialProps = async ctx => {
  const result = await httpPost(`users/register/email-validation`, {
    emailValidationToken: ctx.query.emailValidationToken
  });

  if (!result.ok) {
    destroyCookie(ctx, "validationToken");
    myRouter(ctx, "/");
  } else {
    setCookie(ctx, "validationToken", result.validationToken, {
      maxAge: 30 * 24 * 60 * 60,
      path: "/"
    });

    myRouter(ctx, "/register");
  }

  return result;
};

export default EmailValidation;
