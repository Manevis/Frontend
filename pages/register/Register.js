import React, { useState } from "react";
import cs from "classnames";
import { parseCookies } from "nookies";
import styles from "./Register.module.scss";
import { useRouter } from "next/router";
import { myRouter } from "../../utils/MyRouter";

const Register = props => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  return (
    <div className={cs(styles.root, "container")}>
      This is registration page
    </div>
  );
};

Register.getInitialProps = async ctx => {
  const { validationToken } = parseCookies(ctx);

  if (validationToken) {
    return {
      noLayout: true,
      validationToken,
      SEO: {
        title: "تکمیل ثبت نام"
      }
    };
  } else {
    myRouter(ctx, "/entrance");
  }
};

export default Register;
