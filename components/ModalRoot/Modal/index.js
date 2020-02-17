import React from "react";
import PropTypes from "prop-types";
import styles from "./Modal.module.scss";
import { ModalContext } from "../../_Context_/ModalContext";

const Modal = ({ children, type }) => {
  const [modals, modalsAction] = React.useContext(ModalContext);

  const hideModal = () => {
    modalsAction.hideModal({ type });
  };

  return (
    <div className="">
      <div onClick={hideModal} className={styles.shadow} />
      <div className={styles.root}>{children}</div>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string.isRequired,
};

export default Modal;
