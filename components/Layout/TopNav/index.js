import React from "react";
import Link from "next/link";
import cs from "classnames";
import styles from "./styles.module.scss";
import { ModalContext } from "../../_Context_/ModalContext";
import { LOGIN_MODAL } from "../../ModalRoot/constans";

const TopMenu = () => {
  const { modalActions } = React.useContext(ModalContext);

  const showLoginModal = () => {
    modalActions.showModal({ type: LOGIN_MODAL });
  };

  return (
    <header>
      <nav className={cs(styles.topMenu, "container-fluid")}>
        <Link href="/">
          <a>
            <img src="/logo.png" alt="Autor.ir" />
          </a>
        </Link>

        <button onClick={showLoginModal}>login</button>
      </nav>
    </header>
  );
};

export default TopMenu;
