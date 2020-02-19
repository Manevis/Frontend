import React from "react";
import Link from "next/link";
import cs from "classnames";
import styles from "./styles.module.scss";
import { UserContext } from "../../_Context_/UserContext";
import { fullName } from "../../../utils/string";

const TopMenu = () => {
  const { user } = React.useContext(UserContext);
  return (
    <header>
      <nav className={cs(styles.topMenu, "container-fluid")}>
        <Link href="/">
          <a>
            <img src="/logo.png" alt="Autor.ir" />
          </a>
        </Link>

        {user ? (
          <div>خوش آمدید {fullName(user)}</div>
        ) : (
          <Link href="/entrance">
            <a>ورود / ثبت‌نام</a>
          </Link>
        )}
      </nav>
    </header>
  );
};

export default TopMenu;
