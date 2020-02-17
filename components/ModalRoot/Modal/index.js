import React from "react";
import PropTypes from "prop-types";
import cs from "classnames";
import styles from "./Modal.module.scss";
import { ModalContext } from "../../_Context_/ModalContext";

const Modal = ({ children, type, title }) => {
  const { modalActions } = React.useContext(ModalContext);

  const hideModal = () => {
    modalActions.hideModal({ type });
  };

  return (
    <div className={cs(styles.root)}>
      <div onClick={hideModal} className={styles.shadow} />
      <div className={cs(styles.modalContentBox, "col-md-6")}>
        <header>
          <div className={styles.title}>{title}</div>
        </header>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  title: PropTypes.node,
  type: PropTypes.string.isRequired
};

Modal.defaultProps = {
  title: "مدال"
};

export default Modal;
