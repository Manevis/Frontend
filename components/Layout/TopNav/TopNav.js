import React, { useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import cs from "classnames";
import styles from "./styles.module.scss";
import { UserContext } from "../../_Context_/UserContext";
import { fullName } from "../../../utils/string";
import { httpGet } from "../../../utils/request";
import { getItem, setItem } from "../../../utils/storage";
import { imgFile } from "../../../utils/img";
import Logo from "../../Logo";

const TopNav = ({ backTo }) => {
  const { user, setUser } = React.useContext(UserContext);

  const getUserProfile = () => {
    const storageUser = getItem("user");
    if (storageUser) {
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
    setItem("logout", Date.now());
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
                <Link href="/entrance">
                  <a
                    onClick={() => {
                      setItem("backTo", backTo);
                    }}
                  >
                    ورود / ثبت‌نام
                  </a>
                </Link>
              )}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

TopNav.propTypes = {
  backTo: PropTypes.object.isRequired
};

export default TopNav;
