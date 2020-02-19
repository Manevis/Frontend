import React, { useEffect, useState } from "react";
import Link from "next/link";
import cs from "classnames";
import styles from "./styles.module.scss";
import { UserContext } from "../../_Context_/UserContext";
import { fullName } from "../../../utils/string";
import { httpGet } from "../../../utils/request";
import { getItem } from "../../../utils/storage";

const TopMenu = () => {
  const { user, setUser } = React.useContext(UserContext);

  const getUserProfile = () => {
    if (getItem("user")) {
      httpGet("users/profile").then(receivedUser => {
        if (receivedUser.httpStatus.code === 200) {
          setUser(receivedUser);
        } else {
          setUser(null);
        }
      });
    }
  };

  useEffect(getUserProfile, []);

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
