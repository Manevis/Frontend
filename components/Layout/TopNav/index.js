import React from "react";
import Link from "next/link";
import cs from "classnames";
import styles from "./styles.module.scss";
import { ModalContext } from "../../_Context_/ModalContext";
import { LOGIN_MODAL } from "../../ModalRoot/constans";

const TopMenu = props => {
  const [modals, modalActions] = React.useContext(ModalContext);
  return (
    <header>
      <nav className={cs(styles.topMenu, "container-fluid")}>
        <Link href="/">
          <a>
            <img src="/logo.png" alt="Autor.ir" />
          </a>
        </Link>

        <button onClick={() => modalActions.showModal({ type: LOGIN_MODAL })}>
          login
        </button>
      </nav>
    </header>
  );
};

export default TopMenu;
