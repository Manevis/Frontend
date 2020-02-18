import React, { useState } from "react";
import cs from 'classnames';
import styles from "./Enterance.module.scss";
import Link from "next/link";

const Entrance = props => {
  const [email, setEmail] = useState('');

  return <div className={cs(styles.root, 'container')}>
    <div className="row justify-content-center align-items-center vh-100 flex-column">
      <div className={cs(styles.logo, 'mb-5')}>
        <Link href="/">
          <a>
            <img src="/logo.png" alt="Autor.ir"/>
          </a>
        </Link>
      </div>
      <div className={cs('col-md-6 col-sm-12 col-lg-4', styles.entranceBox)}>
        <input type="email" value={email} placeholder="آدرس ایمیل" required />
      </div>
    </div>
  </div>;
};

Entrance.getInitialProps = async ctx => {
  return {
    noLayout: true,
    SEO: {
      title: 'ورود / ثبت نام در Autor.ir',
      description: 'ثبت نام و ورود به سایت Autor.ir جهت نوشتن مقاله و مطالب مفید فارسی',
      keywords: 'ورود,ثبت نام,نویسندگی',
    }
  };
};

export default Entrance;
