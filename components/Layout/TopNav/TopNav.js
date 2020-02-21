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
import Logo from '../../Logo';

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
  };

  useEffect(getUserProfile, []);

  return (
    <header className={cs(styles.topMenu, "container-fluid")}>
      <div className="row">
        <nav className="container">
          <div className="row">
            <div className="col">
              <Link href="/">
                <a>
                  <Logo className={styles.logo} />
                </a>
              </Link>
            </div>

            <div className="col">
              {user ? (
                <img
                  src={imgFile(user.avatar) || "/profile.png"}
                  alt={fullName(user)}
                  onClick={logout}
                />
              ) : (
                <Link
                  href={{
                    pathname: "/entrance",
                    query: {
                      backTo: process.browser
                        ? encodeURI(window.location.pathname)
                        : "/"
                    }
                  }}
                >
                  <a>ورود / ثبت‌نام</a>
                </Link>
              )}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default TopMenu;
