import React, { useState } from "react";
import cs from "classnames";
import styles from "./Register.module.scss";
import Link from "next/link";
import { useRouter } from 'next/router';

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
  return {
    noLayout: true,
    SEO: {
      title: "تکمیل ثبت نام",
    }
  };
};

export default Register;
