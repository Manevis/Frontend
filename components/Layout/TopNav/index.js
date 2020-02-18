import React from "react";
import Link from "next/link";
import cs from "classnames";
import styles from "./styles.module.scss";

const TopMenu = () => {
  return (
    <header>
      <nav className={cs(styles.topMenu, "container-fluid")}>
        <Link href="/">
          <a>
            <img src="/logo.png" alt="Autor.ir" />
          </a>
        </Link>

        <Link href="/entrance">
          <a>ورود / ثبت‌نام</a>
        </Link>
      </nav>
    </header>
  );
};

export default TopMenu;
