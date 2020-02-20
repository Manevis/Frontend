import React, { useEffect } from "react";
import Link from "next/link";
import cs from "classnames";
import styles from "./styles.module.scss";
import { UserContext } from "../../_Context_/UserContext";
import { fullName } from "../../../utils/string";
import { httpGet } from "../../../utils/request";
import { getItem } from "../../../utils/storage";
import { imgFile } from "../../../utils/img";
import { destroyCookie } from "nookies";

const TopMenu = () => {
  const { user, setUser } = React.useContext(UserContext);

  const getUserProfile = () => {
    const storageUser = getItem("user");
    if (storageUser) {
      setUser(storageUser);
      httpGet("users/profile").then(receivedUser => {
        if (receivedUser.httpStatus.code === 200) {
          setUser(receivedUser);
        } else {
          setUser(null);
        }
      });
    }
  };

  const logout = () => {
    setUser(null);
    destroyCookie(null, "token");
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
          <img
            src={imgFile(user.avatar) || "/profile.png"}
            alt={fullName(user)}
            onClick={logout}
          />
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
